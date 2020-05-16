import React from "react";
import enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16.3";
import Wrapper from "./Components/Wrapper";

enzyme.configure({ adapter: new Adapter() });

describe("Wrapper", () => {
  it("should show text", () => {
    const wrapper = shallow(<Wrapper />);
    const text = wrapper.find("div h1");
    expect(text.text()).toBe("Team-044 Product");
  });

  it("should show text", () => {
    const wrapper = shallow(<Wrapper />);
    const text = wrapper.find("div ul .active");
    expect(text.text()).toBe("Home");
  });

  it("should show text", () => {
    const wrapper = shallow(<Wrapper />);
    const text = wrapper.find("div ul .services");
    expect(text.text()).toBe("Services");
  });

  //   it("should link to account page", () => {
  //     const wrapper = shallow(<Home />);
  //     const button = wrapper.find("Link");
  //     button.simulate("click");

  //     const text = wrapper.find("div Link");
  //     expect(TransitionEvent).toBe("/account");
  //   });
});
