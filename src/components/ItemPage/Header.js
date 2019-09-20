import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


const Header = ({ items, match, history, deleteItem }) => {

    // Находим значение id из объекта match, который предоставляет роутер
    const id = parseInt(match.params.id);

    // Удаляем айтем и перенаправляем на страницу со списком
    const onDeleteClick = () => {
        deleteItem(id);
        history.push('/items');
    }

    const header = <div className='header__container'>
        <h1 className='header__title'>Задача №{id}</h1>
        <button
            className='button button--small button--red'
            onClick={onDeleteClick}
        >
            Удалить
    </button>
    </div>;

    // Отрендерить header, только если данные загружены из апи
    return (
        <Fragment>
            {items[0] !== 'INIT' && header}
        </Fragment>

    );
}

Header.propTypes = {
    items: PropTypes.array.isRequired,
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    deleteItem: PropTypes.func.isRequired
}

export default Header;