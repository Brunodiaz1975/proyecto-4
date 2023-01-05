import React from 'react'
import ReservacionFormulario from './ReservacionFormulario'
import '../hojas-de-estilo/listadereservaciones.css'
import { useState } from 'react'
import Reservacion from './Reservacion'

function ListaDeReservaciones() {

    const [ reservacion, setReservacion] = useState([]);

    const agregarReservacion = reservacion => {
       
            const reservacionActualizada = [reservacion];
            setReservacion(reservacionActualizada);
        
    }

    const eliminarReservacvion = id => {
        const reservacionActualizada = reservacion.filter(reservacion => reservacion.id !== id);
        setReservacion(reservacionActualizada);
    }

  return (
    <>
        <ReservacionFormulario onSubmit={agregarReservacion} />
        <div className='reservacion-lista-contenedor'>
            {
                reservacion.map((reservacion) =>
                    <Reservacion
                    key={reservacion.id}
                    id={reservacion.id} 
                    texto={reservacion.texto}  
                    name={reservacion.nombre}                 
                    cumplida={reservacion.cumplida}
                    eliminarReservacion={eliminarReservacvion}
                    />
                )
            }
        </div>
    </>
  )
}

export default ListaDeReservaciones