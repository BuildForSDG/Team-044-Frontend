import React from "react";
import enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16.3";
import CrossServices from "./Components/common/CrossServices";

enzyme.configure({ adapter: new Adapter() });

describe("CrossServices", () => {
  it("should display", () => {
    const services = shallow(<CrossServices />);
    const content = services.find("h2");
    expect(content.text()).toBe("Services");
  });

  it("should display", () => {
    const services = shallow(<CrossServices />);
    const content = services.find("h3");
    expect(content.text()).toBe("We do offer awesome Services");
  });
});
