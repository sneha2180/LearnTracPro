import React, { useState } from 'react';
import axios from 'axios';


function SignUpComponent() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('student');
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      if (name === 'email') setEmail(value);
      if (name === 'password') setPassword(value);
    };
  
    const handleRoleChange = (event) => {
      setRole(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (email && role && password) {
        axios.post('http://localhost:5000/signup', { email, password, role })
          .then(response => {
            console.log('Signup successful:', response.data);
            window.location.pathname = '/signin';
          })
          .catch(error => {
            console.error('Error signing up:', error);
          });
      } else {
        alert("Invalid input");
      }
    };
  
    return (
      <div>
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input type="email" name="email" value={email} onChange={handleInputChange} />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" name="password" value={password} onChange={handleInputChange} />
          </div>
          <div>
            <label>Role:</label>
            <select name="role" value={role} onChange={handleRoleChange}>
              <option value="student">Student</option>
              <option value="tutor">Tutor</option>
            </select>
          </div>
          <button type="submit">Signup</button>
        </form>
      </div>
    );
}

export default SignUpComponent