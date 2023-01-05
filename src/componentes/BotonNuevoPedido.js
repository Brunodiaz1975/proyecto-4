import React from 'react'
import '../hojas-de-estilo/botonNuevoPedido.css'

const BotonNuevoPedido = (props) => (
    <div 
        className='boton-limpiar' 
        onClick={props.manejarClear}>
        {props.children}
    </div>
);


export default BotonNuevoPedido;