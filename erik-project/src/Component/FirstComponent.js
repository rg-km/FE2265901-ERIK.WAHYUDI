import React, { useState } from "react";
import SecondComponent from "./SecondComponent";

const FirstComponent = function (props) {
  // const [emoji, setEmoji] = useState(9);
  const data = {
    content: "bla",
    name: "andi",
  };
  return (
    <div>
      <SecondComponent {...data} />
    </div>
  );
};

export default FirstComponent;
