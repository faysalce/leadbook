import React from 'react';
import PageLayout from '../components/PageLayout';
import {shallow} from "enzyme";

it("PageLayout renders correctly", () => {
  const wrapper = shallow(
    <PageLayout />
  );
  expect(wrapper).toMatchSnapshot();
});