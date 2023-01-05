import React from 'react'
import '../hojas-de-estilo/reservaciones.css'
import ListaDeReservaciones from '../componentes/ListaDeReservaciones'

function Reservaciones() {
  return (
    <div className='contenedor-reservaciones'>
      
      <div className='reservaciones-lista-principal'>
        <h1>Mi Reservacion</h1>
        <ListaDeReservaciones />
      </div>
    </div>
  )
}

export default Reservaciones