import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Item = ({ id, title, deleteItem }) => (
    <div className='item__container'>
        <div className='item__id'>{id}</div>
        <div className='item__title'>{title}</div>
        <div className='item__actions-container'>
            <Link className='item__action' to={`/items/${id}`} >EDIT</Link>
            <button className='item__action' onClick={deleteItem} >DELETE</button>
        </div>
    </div>
);

Item.propTypes = {
    id: PropTypes.number.isRequired, 
    title: PropTypes.string.isRequired,
    deleteItem: PropTypes.func.isRequired
}

export default Item;