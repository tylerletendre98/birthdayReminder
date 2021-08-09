import React from "react";

const List = ({ people }) => {
  return (
    <div>
      {people.map((person) => {
        return (
          <article key={person.id}>
            <img
              src={person.image}
              alt={person.name}
              height="200"
              style={{ borderRadius: "50%" }}
            />
            <div>
              <h4>{person.name}</h4>
              <p>{person.age}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
