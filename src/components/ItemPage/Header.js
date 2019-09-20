import React from 'react';
import PropTypes from 'prop-types';


const Header = ({ match, history, deleteItem }) => {

    // Находим значение id из объекта match, который предоставляет роутер
    const id = parseInt(match.params.id);

    // Удаляем айтем и перенаправляем на страницу со списком
    const onDeleteClick = () => {
        deleteItem(id);
        history.push('/items');
    }

    return (
        <div className='header__container'>
            <h1 className='header__title'>Задача №{id}</h1>
            <button 
                className='button button--small button--red'
                onClick={onDeleteClick}    
            >
                Удалить
            </button>
        </div>
    );
}

Header.propTypes = {
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    deleteItem: PropTypes.func.isRequired
}

export default Header;