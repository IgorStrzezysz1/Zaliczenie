import React from 'react';

const UserDetail = ({ user }) => {
  return (
    <div>
      <h2>User Detail</h2>
      <p>Name: {user.name}</p>
      <p>Surname: {user.surname}</p>
      <p>City: {user.city}</p>
      <p>Email: {user.email}</p>
      <p>PESEL: {user.pesel}</p>
      <p>Phone number: {user.phoneNumber}</p>
    </div>
  );
};

export default UserDetail;