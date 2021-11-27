import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import "./styles.css";

export const List = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((data) => setUsers(data));
  };
  return (
    <div className="App">
      <div className="wrapper">
        {users.length > 0 &&
          users.map((item, index) => {
            return (
              <div className="card" key={index.toString()}>
                <div className="container">
                  <div className="imagePlaceholder">
                    {item.name.slice(0, 1)[0]}
                  </div>
                  <h4>
                    <b>{item.name}</b>
                  </h4>
                  <p>@{item.username}</p>
                  <a>{item.website}</a>
                  <Link to={`/${item.id}`} key={item.id}>
                    <div className="button">More Details</div>
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
