import React from 'react';
import InputForm from './InputsForm';

const UserEdit = ({ user, updateUser }) => {
  return (
    <div>
      <h2>Edit User</h2>
      <InputForm initialData={user} updateUser={updateUser} />
    </div>
  );
};

export default UserEdit;