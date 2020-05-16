import React from "react";
import enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16.3";
import Services from "../src/Components/Pages/Services";

enzyme.configure({ adapter: new Adapter() });

describe("Service", () => {
  it("should display", () => {
    const services = shallow(<Services />);
    const content = services.find("h2");
    expect(content.text()).toBe("Services");
    expect();
  });

  it("should should show", () => {
    const services = shallow(<Services />);
    const content = services.find("#consumers");
    expect(content.text()).toBe("Consumers");
  });

  it("should should show", () => {
    const services = shallow(<Services />);
    const content = services.find("#investors");
    expect(content.text()).toBe("Investors");
  });

  it("should should show", () => {
    const services = shallow(<Services />);
    const content = services.find("#farmers");
    expect(content.text()).toBe("Farmers");
  });
});
