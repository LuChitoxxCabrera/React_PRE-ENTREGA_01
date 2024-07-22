import React from 'react'
import CartWidget from './CartWidget'
import '../components/NavBar/NavBar.css'

const NavBar = () => {
  return (
    <div>
        <h1>Mi Tienda E</h1>
        <ul>
            <li><a href="">HOME</a><a href="">NOSOTROS</a><a href="">CONTACTO</a><a href="">TIENDA</a></li>
        </ul>
        <CartWidget />
    </div>
  )
}

export default NavBar