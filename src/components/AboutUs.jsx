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
            DIMBA.org is a platform that provides the manager with a comprehensive list of all players available for transfer.
            <br />
            The manager can see a list of all players displayed in form of cards. Then the manager can click on each
            individual player to view their personal statistics.
            <br />
            On the home section, the Manager has the ability to filter and search a specific player of their choosing.
            The last function is to add new players to the transfer list. There is a form provided in the Add Player page
            where the manager inputs the required information.
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
