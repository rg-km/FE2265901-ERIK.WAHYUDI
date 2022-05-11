import React from "react";
import PropTypes from "prop-types";

export default function SecondComponent(props) {
  return (
    <div>
      <p>{props.content}</p>
      <p>{props.name}</p>
    </div>
  );
}

SecondComponent.propTypes = {
  content: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};