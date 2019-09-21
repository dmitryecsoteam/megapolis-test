import React from 'react';
import Item from './Item';
import PropTypes from 'prop-types';

/**
 * 1. Если массив items пустой, то рендерим сообщение, что элементов нет
 * 2. Если размер массива больше нуля, то проверяем первый элемент. Если он не равен 'INIT' (начальное состояние redux store),
 *    то значит данные из апи подгрузились и можно их рендерить с помощью map
 */
const ItemList = ({ items, deleteItem }) => (
    <div className='item-list__container'>
        {items.length === 0 ? <div>н/д</div> :
            items[0] !== 'INIT' && items.map(item => (
                <Item key={item.id} {...item} deleteItem={deleteItem} />
            ))}
    </div>
);

ItemList.propTypes = {
    items: PropTypes.array.isRequired,
    deleteItem: PropTypes.func.isRequired
}

export default ItemList;