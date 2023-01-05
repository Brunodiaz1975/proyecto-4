import React from 'react'
import '../hojas-de-estilo/nosotros.css'

function Nosotros() {
  return (
    <div className='contenedor-nosotros'>
      <h1 className='titulo-nosotros'>Quienes somos?</h1><br></br>
      <p className='historia-nosotros'>Somos un negocio que nacio de una pareja       emprendedora
          Roli Rolls nace del corazón de una pareja extranjera que llegó a Madrid en 2018 con un propósito:  Brindar más momentos de felicidad a esta encantadora ciudad.
          

          Tras más de un año de pruebas y tropiezos, nació el primer Roli, un rollito de canela esponjoso, dulce y jugoso que quería conquistar los corazones de todos los que lo probaran. <br></br>

          Es por ello, que a partir del 6 de Enero del 2020 decidieron elaborar diariamente y de forma artesanal estos rollitos de canela en  el barrio Malasaña de Madrid, 
          trabajando con mucho cariño para poder ser parte de los momentos más felices de todos sus clientes.<br></br>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>

      <h1 className='titulo-nosotros'>Nuestra Ubicacion</h1><br></br>


      <iframe className='ubicacion-nosotros' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60208.04187353846!2d-98.99130039524157!3d19.412292898010055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1e3705c3ad799%3A0xe9e0ede4cbef87f7!2zQ2hpbWFsaHVhY8OhbiwgTcOpeC4!5e0!3m2!1ses-419!2smx!4v1671743313847!5m2!1ses-419!2smx" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

      <p>Estamos ubicados en CD. Nezahualcoyotl calle: Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, temporibus.
      </p>
      <h3>Visitanos!!!</h3>

    </div>
  )
}

export default Nosotros