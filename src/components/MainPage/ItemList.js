import React from 'react';
import Item from './Item';

const ItemList = ({ items, deleteItem }) => (
    <div className='item-list__container'>
        {items.map(item => (
            <Item key={item.id} {...item} deleteItem={() => deleteItem(item.id)} />
        ))}
    </div>
);

export default ItemList;