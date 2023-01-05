import React, { useState } from 'react';
import '../hojas-de-estilo/Rformulario.css'
import { v4 as uuidv4 } from 'uuid';
import {useRef} from 'react';


function ReservacionFormulario(props) {

  const inputRef = useRef(null);
  const resultRef = useRef(null);

  const manejarCambio2 = () => {
    resultRef.current.innerHTML = inputRef.current.value;
  }

  const currentDate = new Date();
  const currentDateString = currentDate.toISOString().slice(0, 16);

  const [input, setInput] = useState('');
  const [input2, setInput2] = useState('');

  

  const manejarCambio = e => {
    setInput(e.target.value);
    setInput2(e.target.value);
    console.log(e.target.value);
  }

  const manejarEnvio = e => {
    e.preventDefault();
    console.log('Enviando Reservacion');
    

    const reservacionNueva = {
      id : uuidv4(),
      texto: input,
      texto: input2,
      cumplida: false
    }
    console.log(reservacionNueva);
    alert('Su reservacion ha sido enviada');
    props.onSubmit(reservacionNueva);
  } 

  return (
    <form 
      className='reservacion-formulario'
      onSubmit={manejarEnvio}>
        <input
          className='reservacion-input-nombre'
          type='texto'
          onChange={manejarCambio2}
          ref={inputRef}
        />
      
        <input 
            className='reservacion-input-fecha'
            type='datetime-local'
            min={currentDateString}
            max='2023-01-15T21:00'
            onChange={manejarCambio}
        />
        
        
        <button className='reservacion-boton'>
            Enviar Reservacion 
        </button>
        <div className='nombre-reservacion' ref={resultRef}></div>
    </form>
  )
}

export default ReservacionFormulario