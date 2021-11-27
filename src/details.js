import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export const UserDetail = () => {
  let params = useParams();
  const [user, setUser] = useState(null);
  useEffect(() => {
    getDetails();
  }, [params]);
  const getDetails = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      .then((data) => data.json())
      .then((data) => setUser(data));
  };
  console.log(user);
  return (
    <div>
      {user && (
        <div>
          <p>name: {user.name}</p>
          <p>user name: {user.username}</p>
          <p>email: {user.email}</p>
          <p>phone: {user.phone}</p>
          <p>company: {user.company.name}</p>
          <p>website: {user.website}</p>
          <p>- Address</p>
          <p>{user.address.street}</p>
          <p>{user.address.suite}</p>
          <p>{user.address.city}</p>
          <p>{user.address.ipcode}</p>
        </div>
      )}
    </div>
  );
};
