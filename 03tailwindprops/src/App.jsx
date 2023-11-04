import { useState } from "react";
import Card from "../components/Card";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  let myObj = {
    userName:'Kaushik',
    age:21,
  }

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">Tailwind test </h1>

      <Card someobj={myObj} username='chaiaurcode'  />
      <Card username='kaushik'/>
    </>
  );
}

export default App;
