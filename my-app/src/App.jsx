import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Props from "./Props";

function App() {
  const name = "React is library";

  return (
    <>
      <h1>Hello {name}</h1>

      <Props 
        name="Anupam" 
        rollno="20b01011317" 
        course="Btech" 
      />
    </>
  );
}

export default App;