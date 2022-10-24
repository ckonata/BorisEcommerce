import React from 'react';
import Brand from '../Brand/Brand';
import NavLinks from '../NavLinks/NavLinks';

const NavBar = () =>{
    return(
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <Brand brandName='Boris'/>
            <NavLinks/>
        </nav>
    );
}

export default NavBar;