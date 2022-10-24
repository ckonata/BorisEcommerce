import React from 'react';

const Brand = ({brandName})=>{

    return(
        <>
        <nav className='navbar navbar-light'>
            <a className='navbar-brand' href='#'>{brandName == null ? 'ECommerce' : brandName}</a>
        </nav>
        </>
    );
}

export default Brand;