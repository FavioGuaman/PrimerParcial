import { useState } from "react";

function Form(props) {
    const [nombre, setNombre] = useState("");
    const [color, setColor] = useState("");
    const [mensaje, setMensaje] = useState("");

function Validacion(event) {
    event.preventDefault();
    if (nombre !== "" || color !== "") {
        props.onNombre(nombre);
        props.onColor(color);
      setMensaje("");
    } else {
      setMensaje("Por favor chequea que la informacion sea correcta");
    }
  }
  return (
    <form onSubmit={Validacion}>
      <label htmlFor="pedido">Nombre</label>
      <input
        type="text"
        id="pedido"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="text"
        id="pedido"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        />
        {mensaje ? <div>{mensaje}</div> : undefined}
        <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
