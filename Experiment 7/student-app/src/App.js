
import './App.css';
import StudentList from './components/StudentList';

function App() {
  return (
    <div className="container">
      <h2>Student Information</h2>
      <StudentList
      name="Rahul Sharma"
      course="Computer Science"
      marks="85"
      />

      <StudentList
      name="Anita Verma"
      course="Information Technology"
      marks="92"
      />
      
      <StudentList
      name="Rohan Gupta"
      course="Electronics"
      marks="78"
      />
       </div>
  );
}

export default App;
