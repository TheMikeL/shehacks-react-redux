import React from "react";
import GreetingsPlus from "./GreetingsPlus";

const Greetings = ({ name }) => (
  <div>
    {name ? <p>Hello {name}</p> : <p> Welcome </p>}
    <GreetingsPlus />
  </div>
);

export default Greetings;
