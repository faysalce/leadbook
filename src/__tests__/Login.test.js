import React from 'react';
import Login from '../components/userAuth/Login';
import {shallow} from "enzyme";

it("Login renders correctly", () => {
  const wrapper = shallow(
    <Login />
  );
  expect(wrapper).toMatchSnapshot();
});