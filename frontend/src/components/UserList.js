import React from 'react';
import '../Styles/UserLIst.css'

const UserList = ({ users, viewUser, editUser, deleteUser,mailUser }) => {
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} {user.surname}
           <div className='UserListButton'>
            <button onClick={() => viewUser(user)}>View</button>
            <button onClick={() => editUser(user)}>Edit</button>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
            <button onClick={() => mailUser(user)}>Send mail</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;