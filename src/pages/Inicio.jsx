
import '../hojas-de-estilo/inicio.css'
import Menu from '../componentes/Menu'

function Inicio() {
    return (
        <div className='contenedor'>
            <div className='Contenedor1'>
            <h1>Bienvenidos</h1><br/>

            <p>Hamburgesas al gusto!!!</p><br/>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloribus suscipit repellat iste nisi quasi quis hic, adipisci reprehenderit! Obcaecati alias illum aliquam totam ipsum, accusamus nemo quibusdam nisi dolores!</p><br/>
            </div>
            <div className='contenedor2'>
                <h1 className='titulo-menu'>Nuestro menu</h1>
                <Menu 
                imagen = 'img1'
                nombre = 'Burger 1'
                descripcion = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloribus suscipit repellat iste nisi quasi quis hic, adipisci reprehenderit! !'
                />
                <Menu 
                imagen = 'img2'
                nombre = 'Burger 2'
                descripcion = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloribus suscipit repellat iste nisi quasi quis hic, adipisci reprehenderit! !'
                />
                <Menu 
                imagen = 'img3'
                nombre = 'Burger 3'
                descripcion = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloribus suscipit repellat iste nisi quasi quis hic, adipisci reprehenderit! !'
                />
                <Menu 
                imagen = 'img4'
                nombre = 'Burger 4'
                descripcion = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloribus suscipit repellat iste nisi quasi quis hic, adipisci reprehenderit! !'
                />
                <Menu 
                imagen = 'img5'
                nombre = 'Burger 5'
                descripcion = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloribus suscipit repellat iste nisi quasi quis hic, adipisci reprehenderit! !'
                />
                <Menu 
                imagen = 'img6'
                nombre = 'Burger 6'
                descripcion = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloribus suscipit repellat iste nisi quasi quis hic, adipisci reprehenderit! !'
                />
                <Menu 
                imagen = 'img7'
                nombre = 'Burger 7'
                descripcion = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloribus suscipit repellat iste nisi quasi quis hic, adipisci reprehenderit! !'
                />
                <Menu 
                imagen = 'img8'
                nombre = 'Burger 8'
                descripcion = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloribus suscipit repellat iste nisi quasi quis hic, adipisci reprehenderit! !'
                />
                <Menu 
                imagen = 'img9'
                nombre = 'Burger 9'
                descripcion = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloribus suscipit repellat iste nisi quasi quis hic, adipisci reprehenderit! !'
                />
                <Menu 
                imagen = 'img10'
                nombre = 'Burger 10'
                descripcion = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloribus suscipit repellat iste nisi quasi quis hic, adipisci reprehenderit! !'
                />
            </div>
           
        </div>
    )
}

export default Inicio