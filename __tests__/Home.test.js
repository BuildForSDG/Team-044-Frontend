import React from "react";
import enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16.3";
import Home from "./Components/Pages/Home";

enzyme.configure({ adapter: new Adapter() });

describe("Home", () => {
  it("should show text", () => {
    const home = shallow(<Home />);
    const text = home.find(".hero-container h1");
    expect(text.text()).toBe(
      "We Connect Farmers, Investors and Consumers around the World"
    );
  });

  it("should show text", () => {
    const home = shallow(<Home />);
    const content = home.find("[to='/accounts']");
    expect(content.text()).toBe("Get Started");
  });

  it("should show text", () => {
    const home = shallow(<Home />);
    const content = home.find("h3");
    expect(content.text()).toBe("Welcome to Team-044 Product");
  });
});
