import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../../components/ItemPage/Header';

let wrapper;
const history = {
    push: jest.fn()
};
const match = {
    params: { id: 1 }
};
const deleteItem = jest.fn();

beforeEach(() => {
    wrapper = shallow(<Header items={['INIT']} history={history} match={match} deleteItem={deleteItem}/>);
});

test('should not render Header if items array is "INIT"', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render Header', () => {
    wrapper.setProps({
        items: [{ id: 1, title: 'first' }]
    });
    expect(wrapper).toMatchSnapshot();
});

test('should delete item on button click', () => {
    wrapper.setProps({
        items: [{ id: 1, title: 'first' }]
    });
    wrapper.find('button').simulate('click');
    expect(deleteItem).toHaveBeenCalledWith(1);
    expect(history.push).toHaveBeenCalledWith('/items');
});