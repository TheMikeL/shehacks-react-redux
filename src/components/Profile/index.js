import React from "react";

import "./Profile.scss";

const Profile = (props) => {
  const { information } = props;
  const newInformation = props.information

  
  return information.map((person) => {
    const {firstName, lastName, job, hobby} = person;
    return (
      <div className="card">
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Job: {job}</p>
        <p>Hobby: {hobby}</p>
      </div>
    );
  });
};

export default Profile;
