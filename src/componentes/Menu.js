import React from 'react'
import '../hojas-de-estilo/menu.css'

function Menu(props) {
  return (
    < div className='contenedor-menu'>
            <img className='imagen-menu'
            src={require(`../imagenes/${props.imagen}.jpeg`)}
            alt='Foto Hamburguesa'/>
      
            <p className='nombre-menu'><strong>{props.nombre}</strong></p>
            <p className='descripcion-menu'><strong>{props.descripcion}</strong> </p>
      
    </div>
  )
}

export default Menu