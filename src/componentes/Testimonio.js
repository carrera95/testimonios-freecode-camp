import '../hojas-de-estilo/Testimonio.css'

const  Testimonio = (props) => {
  return(
    <div className="contenedor-testimonio">
      <img 
        className="imagen-testimonio"
        src={require(`../imagenes/pp-${props.imagen}.png`)}
        alt="foto de aylin"
        />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">
          <strong> {props.nombre} </strong> en <strong>{props.pais}</strong></p>
        <p className="cargo-testimonio">{props.cargo} en {props.empresa}</p>
        <p className="texto-testimonio">{props.testimonio}</p>
      </div>
    </div>
  );
}

export {Testimonio}