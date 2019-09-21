import React from 'react';
import { shallow } from 'enzyme';
import ItemPage from '../../../components/ItemPage';

test('should render ItemPage', () => {
    const wrapper = shallow(<ItemPage />);
    expect(wrapper).toMatchSnapshot();
});