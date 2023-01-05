import React from 'react'
import '../hojas-de-estilo/reservacion.css'
import { AiOutlineCloseCircle } from "react-icons/ai";

function Reservacion({ id, texto, cumplida, cumplidaReservacion, eliminarReservacion }) {
  return (
    <div className={cumplida ? 'reservacion-contenedor cumplida' : 'reservacion-contenedor'}>
        <div 
        className='reservacion-fecha'
        onClick={() => cumplidaReservacion(id)}>
         {texto}
         
        </div>
        <div 
        className='reservacion-contenedor-icono'
        onClick={() => eliminarReservacion(id)}>
            <AiOutlineCloseCircle className='reservacion-icono'/>
        </div>

    </div>

  )
}

export default Reservacion;