import React from "react";
import { useSelector } from "react-redux";

const GreetingsPlus = () => {
  const firstName = useSelector((state) => state.person.firstName);
  const lastName = useSelector((state) => state.person.lastName);
  const email = useSelector((state) => state.person.email);

  return (
    <div>
      {!firstName ? (
        <div> </div>
      ) : (
        <div>
          <p>First Name: {firstName}</p>
          <p>Last Name: {lastName}</p>
          <p>Email: {email}</p>
        </div>
      )}
    </div>
  );
};

export default GreetingsPlus;
