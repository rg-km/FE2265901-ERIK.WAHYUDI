import React from "react";

export default function ListMap() {
  const data = [
    {
      name: "Tisa",
      class: "Tribe",
    },
    {
      name: "TS",
      class: "IF-1",
    },
    {
      name: "Anggi",
      class: "SK-1",
    },
  ];
  return (
    <div>
      {data.map((element, index) => {
        <StudentList key={index} name={element.name} class={element.class} />;
      })}
    </div>
  );
}

function StudentList(props) {
  return (
    <ul className="StudentList">
      <li className="StudentList-details">Name : {props.name}</li>
      <li className="StudentList-details">Class: {props.class}</li>
    </ul>
  );
}
