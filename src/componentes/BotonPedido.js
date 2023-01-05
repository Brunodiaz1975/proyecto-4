import React from 'react';
import '../hojas-de-estilo/botonPedido.css'

function BotonPedido(props) {

    const esOperador = valor => {
        return isNaN(valor) && (valor !== '.') && (valor !== '=');
    }
  return (
    <div className = {`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trim()} onClick = {() => props.manejarClic(props.children)}>
        
        {props.children}
        
    </div>
  )
}

export default BotonPedido;