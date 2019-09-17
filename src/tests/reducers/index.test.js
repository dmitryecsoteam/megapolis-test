import reducer from '../../reducers';

const items = [{ id: 1, title: 'first' }, { id: 2, title: 'second' }];

test('should set default state', () => {
    const state = reducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should add item', () => {
    const state = reducer(items, { type: 'ADD_ITEM', title: 'third', id: 3 });
    expect(state).toEqual([...items, { title: 'third', id: 3 }]);
});

test('should edit item', () => {
    const state = reducer(items, { type: 'EDIT_ITEM', title: 'edited', id: 1 });
    expect(state[0].title).toBe('edited');
});

test('should not edit item if id not found', () => {
    const state = reducer(items, { type: 'EDIT_ITEM', title: 'edited', id: 5 });
    expect(state).toEqual(items);
});

test('should delete item', () => {
    const state = reducer(items, { type: 'DELETE_ITEM', id: 1 });
    expect(state.length).toBe(1);
    expect(state[0].id).toBe(2);
});

test('should not delete item if id not found', () => {
    const state = reducer(items, { type: 'DELETE_ITEM', id: 5 });
    expect(state).toEqual(items);
});

test('should set items', () => {
    const newItems = [{ id: 3, title: 'third' }, { id: 4, title: 'forth' }];
    const state = reducer(items, { type: 'SET_ITEMS', items: newItems });
    expect(state).toEqual(newItems);
});