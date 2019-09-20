import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import editIcon from '../../icons/edit.svg';
import deleteIcon from '../../icons/delete.svg';

const Item = ({ id, title, deleteItem }) => (
    <div className='item__container'>

        <div className='item__id item__cell'>Задача №{id}</div>
        <div className='item__title item__cell'>{title}</div>
        <div className='item__actions-container item__cell'>
            <Link className='item__action item__action--link' to={`/items/${id}`} >
                <img className='item__icon' src={editIcon} alt='Edit' />
            </Link>
            <button className='item__action item__action--button' onClick={deleteItem} >
                <img className='item__icon' src={deleteIcon} alt='Delete' />
            </button>
        </div>
    </div>
);

Item.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    deleteItem: PropTypes.func.isRequired
}

export default Item;