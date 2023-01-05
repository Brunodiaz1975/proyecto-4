import React from 'react';
import BotonNuevoPedido from '../componentes/BotonNuevoPedido';
import BotonPedido from '../componentes/BotonPedido';
import PantallaTotal from '../componentes/PantallaTotal';
import '../hojas-de-estilo/pedido.css';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function Pedido() {

  const[input, setInput] = useState ('');

  const agregarInput = val => {
    setInput(input + val);
  };

  const calcularTotal = () => {
    if (input) {
      setInput(evaluate(input));
    }else{
      alert('Favor de ingresr un Pedido');
    }
    
  }

  return (
    <div className='contenedor-pedido'>
        <h1>Realiza aqui tu pedido</h1>
        <div className='contenedor-menu'>
        <PantallaTotal input={input}/>
          <div className='fila'>
            <h3>Burger 1</h3>
            <BotonPedido manejarClic = {agregarInput}>1</BotonPedido>
            <h3>Burger 2</h3>
            <BotonPedido manejarClic = {agregarInput}>2</BotonPedido>
            <h3>Burger 3</h3>
            <BotonPedido manejarClic = {agregarInput}>3</BotonPedido>
            
          </div>
          <div className='fila'>
            <h3>Burger 4</h3>
            <BotonPedido manejarClic = {agregarInput}>4</BotonPedido>
            <h3>Burger 5</h3>
            <BotonPedido manejarClic = {agregarInput}>5</BotonPedido>
            <h3>Burger 6</h3>
            <BotonPedido manejarClic = {agregarInput}>6</BotonPedido>
            
          </div>
          <div className='fila'>
            <h3>Burger 7</h3>
            <BotonPedido manejarClic = {agregarInput}>7</BotonPedido>
            <h3>Burger 8</h3>
            <BotonPedido manejarClic = {agregarInput}>8</BotonPedido>
            <h3>Burger 9</h3>
            <BotonPedido manejarClic = {agregarInput}>9</BotonPedido>
            
          </div>
          <div className='fila'>
          <h3>Burger 10</h3>
            <BotonPedido manejarClic = {agregarInput}>10</BotonPedido>
          </div>
          <div className='fila'>
          <h3>Resta a tu pedido</h3>
            <BotonPedido manejarClic = {agregarInput}>-</BotonPedido>
            <h3>Suma a tu pedido</h3>
            <BotonPedido manejarClic = {agregarInput}>+</BotonPedido>
          </div>
          
          <div className='fila'>
          <h3>Total del Pedido</h3>
            <BotonPedido manejarClic = {calcularTotal}>=</BotonPedido>
            <BotonNuevoPedido manejarClear={() =>setInput('')}>Nuevo Pedido</BotonNuevoPedido>
          </div>
        </div>
    </div>
  )
}

export default Pedido;