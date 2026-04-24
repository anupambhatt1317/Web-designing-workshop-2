import { useState } from "react";

function App() {
  const [form, setForm] = useState({
    area: "",
    population: "",
    supply: "",
    demand: "",
  });

  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const analyze = async () => {
    setLoading(true);
    setResult("");

    try {
      const res = await fetch("http://localhost:5000/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      setResult(data.result);
    } catch (error) {
      setResult("Error connecting to server ❌");
    }

    setLoading(false);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>💧 Smart Water Distribution</h1>

      <input name="area" placeholder="Area Name" onChange={handleChange} /><br/>
      <input name="population" placeholder="Population" onChange={handleChange} /><br/>
      <input name="supply" placeholder="Water Supply (L)" onChange={handleChange} /><br/>
      <input name="demand" placeholder="Water Demand (L)" onChange={handleChange} /><br/>

      <button onClick={analyze}>
        {loading ? "Analyzing..." : "Analyze"}
      </button>

      <h3>Result:</h3>
      <p>{result}</p>
    </div>
  );
}

export default App;