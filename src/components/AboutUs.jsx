import React, { Fragment } from "react";
import PropTypes from "prop-types";
//import "../stylesheet/App.css";

function About(props) {
  const { title, groupMembers } = props;

  return (
    <Fragment>
      <div className="content">
        <div className="col-md-7 bg-dark text-center text-white">
          <h4 className="text-uppercase text-white-50"></h4>
          <h1 className="display-5">{title}</h1>
          <p className="lead fw-bolder">
            Our Group Members include:
            <ul>
              {groupMembers.map((member, index) => (
                <li key={index}>{member}</li>
              ))}
            </ul>
            About us content
            <br />
           
            <br />
           
   
            <br />
          </p>
        </div>
      </div>
    </Fragment>
  );
}

About.propTypes = {
  title: PropTypes.string.isRequired,
  groupMembers: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default About;