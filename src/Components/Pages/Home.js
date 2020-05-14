import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <section id="hero">
      <div className="hero-container">
        <h3>
          Welcome to
          {' '}
          <strong>Team-044 Product</strong>
        </h3>
        <h1>
          We Connect Farmers, Investors and Consumers around the World
        </h1>

        <Link href="/accounts" className="btn-get-started scrollto">
          Get Started
        </Link>
      </div>
    </section>
  </div>
);


export default Home;
