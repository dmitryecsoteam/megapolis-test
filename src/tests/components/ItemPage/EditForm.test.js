import React from 'react';
import { shallow } from 'enzyme';
import EditForm from '../../../components/ItemPage/EditForm';

let wrapper;
const history = {
    push: jest.fn()
};
const match = {
    params: { id: 1 }
};
const editItem = jest.fn();

beforeEach(() => {
    wrapper = shallow(<EditForm items={['INIT']} history={history} match={match} editItem={editItem}/>);
});

test('should not render form if items array is "INIT"', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should redirect to /items if id is not found in items list', () => {
    wrapper.setProps({ items: [] });
    expect(history.push).toHaveBeenLastCalledWith('/items');
});

test('should render form', () => {
    wrapper.setProps({ items: [{ id: 1, title: 'first item' }] });
    expect(wrapper).toMatchSnapshot();
});

test('should render save button when value of input is not equal to title', () => {
    wrapper.setProps({ items: [{ id: 1, title: 'first item' }] });
    wrapper.find('input').simulate('change', { target: { value: 'new title' } });
    expect(wrapper.find('button')).toMatchSnapshot();
});

test('should return to /items on button click (no changes in title)', () => {
    wrapper.setProps({ items: [{ id: 1, title: 'first item' }] });
    wrapper.find('form').simulate('submit', { preventDefault: () => {} });
    expect(history.push).toHaveBeenLastCalledWith('/items');
});

test('should render error message on empty title save', () => {
    wrapper.setProps({ items: [{ id: 1, title: 'first item' }] });
    wrapper.find('input').simulate('change', { target: { value: '' } });

    wrapper.find('form').simulate('submit', { preventDefault: () => {} });
    expect(wrapper.find('.add-popup__error')).toMatchSnapshot();
});

test('should save new title', () => {
    wrapper.setProps({ items: [{ id: 1, title: 'first item' }] });
    wrapper.find('input').simulate('change', { target: { value: 'new title' } });

    wrapper.find('form').simulate('submit', { preventDefault: () => {} });
    expect(editItem).toHaveBeenCalledWith('new title', 1);
    expect(history.push).toHaveBeenLastCalledWith('/items');
});

