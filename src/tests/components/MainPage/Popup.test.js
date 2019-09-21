import React from 'react';
import { mount } from 'enzyme';
import Popup from '../../../components/MainPage/Popup';

let wrapper;
const addItem = jest.fn();

beforeEach(() => {
    wrapper = mount(<Popup addItem={addItem} />);
    // Показать форму во всплывающем окне
    wrapper.find('button').simulate('click');
});

test('should render Popup component', () => {
    const wrapperClosed = mount(<Popup addItem={addItem} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapperClosed).toMatchSnapshot();
});

test('should render error message when add item with empty title', () => {
    wrapper.find('form').simulate('submit');
    expect(wrapper.state('error')).toBeTruthy();
    expect(wrapper.find('.add-popup__error')).toMatchSnapshot();
});

test('should add item with non-empty title', () => {
    const value = 'test title';
    wrapper.find('input').simulate('change', { target: { value } });
    expect(wrapper.state('title')).toBe(value);

    wrapper.find('form').simulate('submit');
    expect(addItem).toHaveBeenCalledTimes(1);
    expect(addItem).toHaveBeenCalledWith(value)
})