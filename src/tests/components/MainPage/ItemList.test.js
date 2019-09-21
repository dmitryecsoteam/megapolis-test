import React from 'react';
import { shallow } from 'enzyme';
import ItemList from '../../../components/MainPage/ItemList';

test('should not render list, if items array contains "INIT"', () => {
    const wrapper = shallow(<ItemList items={['INIT']} deleteItem={() => {}}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render message if items array is empty', () => {
    const wrapper = shallow(<ItemList items={[]} deleteItem={() => {}}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render list of items from items array', () => {
    const wrapper = shallow(<ItemList items={[{ id: 1, title: 'first' }, { id: 2, title: 'second' }]} deleteItem={() => {}}/>);
    expect(wrapper).toMatchSnapshot();
});