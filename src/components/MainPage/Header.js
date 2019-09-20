import React from 'react';
import Popup from './ConnectedPopup';


const Header = () => {

    return (
        <div className='header__container'>
            <h1 className='header__title header__title--bold'>Список задач</h1>
            <Popup />
        </div>
    )
}

export default Header;