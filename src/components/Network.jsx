import React from "react";
import PersonCard from "./PersonCard";
const Person = [
  {
    name: "Pawan",
    des: "Developer",
    img:
      "https://avatars0.githubusercontent.com/u/52709818?s=460&u=f9f8b8d8f9f8b8d8f9f8b8d8f9f8b8d8f9f8b8d8&v=4",
  },
  {
    name: "Pawan",
    des: "Developer",
    img:
      "https://avatars0.githubusercontent.com/u/52709818?s=460&u=f9f8b8d8f9f8b8d8f9f8b8d8f9f8b8d8f9f8b8d8&v=4",
  },
  {
    name: "Pawan",
    des: "Developer",
    img:
      "https://avatars0.githubusercontent.com/u/52709818?s=460&u=f9f8b8d8f9f8b8d8f9f8b8d8f9f8b8d8f9f8b8d8&v=4",
  },
  {
    name: "Pawan",
    des: "Developer",
    img:
      "https://avatars0.githubusercontent.com/u/52709818?s=460&u=f9f8b8d8f9f8b8d8f9f8b8d8f9f8b8d8f9f8b8d8&v=4",
  },
  {
    name: "Pawan",
    des: "Developer",
    img:
      "https://avatars0.githubusercontent.com/u/52709818?s=460&u=f9f8b8d8f9f8b8d8f9f8b8d8f9f8b8d8f9f8b8d8&v=4",
  },
  {
    name: "Pawan",
    des: "Developer",
    img:
      "https://avatars0.githubusercontent.com/u/52709818?s=460&u=f9f8b8d8f9f8b8d8f9f8b8d8f9f8b8d8f9f8b8d8&v=4",
  },
  {
    name: "Pawan",
    des: "Developer",
    img:
      "https://avatars0.githubusercontent.com/u/52709818?s=460&u=f9f8b8d8f9f8b8d8f9f8b8d8f9f8b8d8f9f8b8d8&v=4",
  },
  {
    name: "Pawan",
    des: "Developer",
    img:
      "https://avatars0.githubusercontent.com/u/52709818?s=460&u=f9f8b8d8f9f8b8d8f9f8b8d8f9f8b8d8f9f8b8d8&v=4",
  },
  {
    name: "Pawan Kumar ",
    des: "Developer",
    img:
      "https://avatars0.githubusercontent.com/u/52709818?s=460&u=f9f8b8d8f9f8b8d8f9f8b8d8f9f8b8d8f9f8b8d8&v=4",
  },
];

function Network() {
  return (
    <div className="w-full grid md:grid-cols-3 grid-cols-1 text-gray-600 p-4 pb-1 bg-gray-100">
      {Person.map((person, idx) => {
          return (
            <PersonCard person={person} key={idx} />
        );
      })}
    </div>
  );
}

export default Network;
