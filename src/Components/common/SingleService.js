import React, { Component } from "react";
import { Link } from "react-router-dom";

class SingleService extends Component {
  render() {
    return (
      <div className="col-md-6 col-lg-3 d-flex align-items-right mb-5 mb-lg-0">
        <div className="icon-box">
          <div className="icon">
            <i className={`${this.props.icon}`}></i>
          </div>
          <h4 className="title">
            <Link to="">{this.props.title}</Link>
          </h4>
          <p className="description">{this.props.description}</p>
        </div>
      </div>
    );
  }
}
export default SingleService;
