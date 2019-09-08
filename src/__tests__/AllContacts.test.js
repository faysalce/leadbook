import React from 'react';
import AllContacts from '../components/Contacts/AllContacts';
import {shallow} from "enzyme";

it("AllContacts renders correctly", () => {
  const wrapper = shallow(
    <AllContacts />
  );
  expect(wrapper).toMatchSnapshot();
});