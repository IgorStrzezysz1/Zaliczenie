import React, { useState, useEffect } from 'react';
import InputForm from './components/InputsForm';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';
import UserEdit from './components/UserEdit';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedUserEdit, setSelectedUserEdit] = useState(null);

  // Fetch users on component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  // Fetch users from API
  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:45716/User/GetList');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  // Create a new user
  const addUser = async (userData) => {
    try {
      const response = await fetch('http://localhost:45716/User/Add', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      fetchUsers()
      //const data = await response.json();
      //setUsers([...users, data]);
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  // Update an existing user
  const updateUser = async (userData) => {
    try {
      const response = await fetch(`http://localhost:45716/User/Update`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      const updatedUsers = users.map((user) =>
        user.id === userData.id ? userData : user
      );
      setUsers(updatedUsers);
      setSelectedUser(null);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  // Delete a user
  const deleteUser = async (userId) => {
    try {
      await fetch(`http://localhost:45716/User/Delete?id=${userId}`, {
        method: 'DELETE',
      });
      const updatedUsers = users.filter((user) => user.id !== userId);
      setUsers(updatedUsers);
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div>
      <h1>CRUD Application</h1>
      <InputForm addUser={addUser} updateUser={updateUser} initialData={{id: '', name: '', surname: '', phoneNumber: '', city: '', pesel: '', email: '' }} />
      <UserList users={users} viewUser={setSelectedUser} editUser={setSelectedUserEdit} deleteUser={deleteUser} />
      {selectedUser ? (
        <div>
          <UserDetail user={selectedUser} />
        </div>
      ) : null}
            {selectedUserEdit ? (
        <div>
          <UserEdit user={selectedUserEdit} updateUser={updateUser} />
        </div>
      ) : null}
    </div>
  );
}

export default App;