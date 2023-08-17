
function Card(props) {

return (
    <div>
        <h1>Hola {props.elNombre}</h1>
        <p>Sabemos que tu color favorito es{props.elColor}</p>
    </div>
    );
}

export default Card;
