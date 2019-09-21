import React from 'react';
import { shallow } from 'enzyme';
import Item from '../../../components/MainPage/Item';

let wrapper;
const deleteItem = jest.fn();
const id = 1, title = 'test';

beforeEach(() => {
    wrapper = shallow(<Item id={id} title={title} deleteItem={deleteItem} />);
});

test('should render Item component', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should call deleteItem with correct id on button click', () => {
    wrapper.find('button').simulate('click');
    expect(deleteItem).toHaveBeenCalledTimes(1);
    expect(deleteItem).toHaveBeenCalledWith(id);
});