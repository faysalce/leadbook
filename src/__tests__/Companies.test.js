import React from 'react';
import Companies from '../components/Contacts/Companies';
import {shallow} from "enzyme";

it("Companies renders correctly", () => {
  const wrapper = shallow(
    <Companies />
  );
  expect(wrapper).toMatchSnapshot();
});