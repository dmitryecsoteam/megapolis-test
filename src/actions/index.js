import 'whatwg-fetch';


/** Обычные action creators **/

export const addItem = (title, id) => ({
    type: 'ADD_ITEM',
    title,
    id
});

export const editItem = (title, id) => ({
    type: 'EDIT_ITEM',
    title,
    id
});

export const deleteItem = id => ({
    type: 'DELETE_ITEM',
    id
});

export const setItems = items => ({
    type: 'SET_ITEMS',
    items
});


/** Асинхронные action creators **/
/* 
    Отправляем запрос к апи с помощью полифила fetch
    Извлекаем содержимое тела ответа с помощью json()
    Если ответ содержит success = true, то отпраляем изменения в локальное хранилище redux через dispatch
*/
export const fetchItems = () => dispatch => window.fetch('https://test.megapolis-it.ru/api/list')
    .then(res => res.json())
    .then(data => {
        if (data.success) dispatch(setItems(data.data))
        else console.log(data.error);
    })
    .catch(error => console.log(error));

export const startAddItem = title =>
    dispatch => window.fetch('https://test.megapolis-it.ru/api/list', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title
        })
    }).then(res => res.json())
        .then(data => {
            if (data.success) dispatch(addItem(title, data.id))
            else console.log(data.error);
        })
        .catch(error => console.log(error));

export const startDeleteItem = id =>
    dispatch => window.fetch(`https://test.megapolis-it.ru/api/list/${id}`, {
        method: 'DELETE'
    }).then(res => res.json())
        .then(data => {
            if (data.success) dispatch(deleteItem(id));
            else console.log(data.error);
        })
        .catch(error => console.log(error));

export const startEditItem = (title, id) =>
    dispatch => window.fetch(`https://test.megapolis-it.ru/api/list/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title
        })
    }).then(res => res.json())
    .then(data => {
        if (data.success) dispatch(editItem(id));
        else console.log(data.error);
    })
    .catch(error => console.log(error));