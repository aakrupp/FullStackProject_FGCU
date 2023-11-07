import React, { useState } from 'react';
import { useUserDispatch, SET_USER } from '../components/User';
import type User from '../types/User';
import { getUserDetails } from './api/getUser';

function LoginPage() {
  const dispatch = useUserDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [retrievedUser, setRetrievedUser] = useState(null); 

  const handleLogin = async () => {
    try {
        let user;
      // Perform login and retrieve user information from the server (e.g., using an API call)
      getUserDetails(username)
      .then((data) => {
        user = { 
            username: data.username, 
            password: data.password,
            first_name: data.first_name, 
            last_name: data.last_name,
            role: data.role,
            id: data.id 
        };
        setRetrievedUser(user);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
      

      // Store user information in global state
      if(retrievedUser.username === username && retrievedUser.password === password) {
        dispatch({ type: SET_USER, payload: user });
        } else {
            console.log('Invalid username or password');
            throw new Error('Invalid username or password');
        }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
}

export default LoginPage;
