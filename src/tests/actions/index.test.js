import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { addItem, editItem, deleteItem, setItems, fetchItems, startAddItem, startDeleteItem, startEditItem } from '../../actions';

const items = [{ id: 1, title: 'first' }, { id: 2, title: 'second' }];


const createMockStore = configureMockStore([thunk]);

const mockResponse = (status, statusText, response) => {
    return new window.Response(response, {
        status: status,
        statusText: statusText,
        headers: {
            'Content-type': 'application/json'
        }
    });
};


test('should set up add item action object', () => {
    const title = 'test_title', id = 123;
    const action = addItem(title, id);
    expect(action).toEqual({
        type: 'ADD_ITEM',
        title,
        id
    });
});

test('should set up edit item action object', () => {
    const title = 'test_title', id = 123;
    const action = editItem(title, id);
    expect(action).toEqual({
        type: 'EDIT_ITEM',
        title,
        id
    });
});

test('should set up delete item action object', () => {
    const id = 123;
    const action = deleteItem(id);
    expect(action).toEqual({
        type: 'DELETE_ITEM',
        id
    });
});

test('should set up set items action object', () => {

    const action = setItems(items);
    expect(action).toEqual({
        type: 'SET_ITEMS',
        items
    });
});

test('should fetch list of items from API and set them in store', () => {
    // mock fetch globally
    window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve(mockResponse(200, null, JSON.stringify({ success: true, data: items }))));


    const store = createMockStore([]);
    store.dispatch(fetchItems())
        .then(() => {
            const expectedActions = store.getActions();
            expect(expectedActions.length).toBe(1);
            expect(expectedActions[0].type).toBe('SET_ITEMS');
            expect(expectedActions[0].items).toEqual(items);
        });
});

test('should fetch list of items from API and not set them in store if success is false', () => {
    window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve(mockResponse(200, null, JSON.stringify({ success: false, error: 'error message' }))));

    const store = createMockStore([]);
    store.dispatch(fetchItems())
        .then(() => {
            const expectedActions = store.getActions();
            expect(expectedActions.length).toBe(0);
        });
});

test('should add item to API and store', () => {
    window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve(mockResponse(200, null, JSON.stringify({ success: true, id: 1 }))));

    const store = createMockStore([]);
    store.dispatch(startAddItem('new item'))
        .then(() => {
            const expectedActions = store.getActions();
            expect(expectedActions.length).toBe(1);
            expect(expectedActions[0].type).toBe('ADD_ITEM');
            expect(expectedActions[0].title).toBe('new item');
            expect(expectedActions[0].id).toBe(1);
        });
});

test('should not add item to store if success is false', () => {
    window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve(mockResponse(200, null, JSON.stringify({ success: false, error: 'error message' }))));

    const store = createMockStore([]);
    store.dispatch(startAddItem('new item'))
        .then(() => {
            const expectedActions = store.getActions();
            expect(expectedActions.length).toBe(0);
        });
});

test('should delete item from API and store', () => {
    window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve(mockResponse(200, null, JSON.stringify({ success: true }))));

    const store = createMockStore([]);
    store.dispatch(startDeleteItem(1))
        .then(() => {
            const expectedActions = store.getActions();
            expect(expectedActions.length).toBe(1);
            expect(expectedActions[0].type).toBe('DELETE_ITEM');
            expect(expectedActions[0].id).toBe(1);
        });
});

test('should not delete item from store if success is false', () => {
    window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve(mockResponse(200, null, JSON.stringify({ success: false, error: 'error message' }))));

    const store = createMockStore([]);
    store.dispatch(startDeleteItem(1))
        .then(() => {
            const expectedActions = store.getActions();
            expect(expectedActions.length).toBe(0);
        });
});

test('should edit item in API and store', () => {
    window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve(mockResponse(200, null, JSON.stringify({ success: true }))));

    const store = createMockStore([]);
    store.dispatch(startEditItem('new title', 1))
        .then(() => {
            const expectedActions = store.getActions();
            expect(expectedActions.length).toBe(1);
            expect(expectedActions[0].type).toBe('EDIT_ITEM');
            expect(expectedActions[0].id).toBe(1);
            expect(expectedActions[0].title).toBe('new title');
        });
});

test('should not edit item in store if success is false', () => {
    window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve(mockResponse(200, null, JSON.stringify({ success: false, error: 'error message' }))));

    const store = createMockStore([]);
    store.dispatch(startEditItem('new title', 1))
        .then(() => {
            const expectedActions = store.getActions();
            expect(expectedActions.length).toBe(0);
        });
});