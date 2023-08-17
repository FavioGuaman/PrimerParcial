import { useState } from "react";
import "./App.css";
import Card from "./components/Card"
import Form from "./components/Form";
function App() {
  const [elNombre, setELNombre] = useState();
  console.log(elNombre);

  const [elColor, setElColor] = useState();
  console.log(elColor);

  function suColor(color) {
    setElColor(color);
  }

  function suNombre(nombre) {
    setELNombre(nombre);
  }
  return (
    <>
      <Form onNombre={suNombre} onColor={suColor} />
      {elNombre ? <Card>{elColor}{elNombre}</Card> : undefined}
    </>
  );
}

export default App;
