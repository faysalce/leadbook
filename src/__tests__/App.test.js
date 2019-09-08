import React from 'react';
import App from '../App';
import {shallow} from "enzyme";

it("App renders correctly", () => {
  const wrapper = shallow(
    <App />
  );
  expect(wrapper).toMatchSnapshot();
});