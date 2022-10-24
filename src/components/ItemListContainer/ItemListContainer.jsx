import React from 'react';

const ItemListContainer = ({greeting}) =>{
    return(
        <div className='p-5 text-center bg-light'>
            <h1 className='mb-3'>{greeting}</h1>
        </div>
    );
}

export default ItemListContainer;