import React, { useState, useEffect } from 'react';
import InputForm from './components/InputsForm';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';
import UserEdit from './components/UserEdit';
import './App.css';
import ContactForm from './components/ContactForm';


function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedUserForMail, setSelectedMailUser] = useState(null);
  const [selectedUserEdit, setSelectedUserEdit] = useState(null);
  //const url = "http://localhost:45716"
  const url = "http://localhost:8080"
  // Fetch users on component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  // Fetch users from API
  const fetchUsers = async () => {
    try {
      const response = await fetch(url + '/User/GetList');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  // Create a new user
  const addUser = async (userData) => {
    try {
      const response = await fetch(url +'/User/Add', {
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
        console.log(userData)
        try {
          const response = await fetch(url + `/User/Update`, {
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
      const sendEmail = async (mailData) => {
        //Po kliknięciu wyślij na formularzu do maila, w konsoli powinien pojawić się obiekt wyglądający tak:
        //{
        // "id": 10
        // "subject": "temat wiadomosci"
        // "text": "treść wiadomości"
        //}
        mailData.id = selectedUserForMail.id;
        console.log(mailData)
        try {
          const response = await fetch(url + `/User/SendMail`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(mailData),
          });
          setSelectedMailUser(null);
        } catch (error) {
          console.error('Error mail sending:', error);
        }
      };





    
  

  // Delete a user
  const deleteUser = async (userId) => {
    try {
      await fetch(url + `/User/Delete?id=${userId}`, {
        method: 'DELETE',
      });
      const updatedUsers = users.filter((user) => user.id !== userId);
      setUsers(updatedUsers);
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className='app'>
      <h1>Aplikacja Igor Strzeżysz, proszę dodaj więcej użytkowników</h1>
      <InputForm addUser={addUser} updateUser={updateUser} initialData={{id: '', name: '', surname: '', phoneNumber: '', city: '', pesel: '', email: '' }} />
      <UserList users={users} viewUser={setSelectedUser} editUser={setSelectedUserEdit} deleteUser={deleteUser} mailUser={setSelectedMailUser} />
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
      {selectedUserForMail ? (
        <div>
          <ContactForm sendMail ={sendEmail} />
        </div>
      ) : null}
    </div>
  );
}

export default App;