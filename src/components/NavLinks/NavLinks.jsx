import React from 'react';
import CartWidget from '../CartWidget/CartWidget';

const NavLinks = ()=>{
    return(
        <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav ml-auto'>
                <li className='nav-item'><a className='nav-link' href='#'>Nosotros</a></li>
                <li className='nav-item'><a className='nav-link' href='#'>Mujer</a></li>
                <li className='nav-item'><a className='nav-link' href='#'>Hombre</a></li>
                <li className='nav-item'><a className='nav-link' href='#'>Unisex</a></li>
                <li className='nav-item'><a className='nav-link' href='#'>Envios</a></li>
                <li className='nav-item'><a className='nav-link' href='#'>Contacto</a></li>
                <CartWidget/>
            </ul>
        </div>
    );
}

export default NavLinks;