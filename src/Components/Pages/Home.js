import React, { Component } from "react";
import { Link } from "react-router-dom";
import CrossServices from "../common/CrossServices";

class Home extends Component {
  render() {
    return (
      <div>
        <section id="hero">
          <div className="hero-container">
            <h3>
              Welcome to <strong>Team-044 Product</strong>
            </h3>
            <h1>
              We Connect Farmers, Investors and Consumers around the World
            </h1>

            <Link to="/accounts" className="btn-get-started scrollto">
              Get Started
            </Link>
          </div>
        </section>
        <CrossServices />
      </div>
    );
  }
}

export default Home;
