import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8083/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Data submitted successfully');
      } else {
        console.error('Failed to submit data');
      }
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-white vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Sign-Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name"><strong>Name</strong></label>
            <input type="text" placeholder="Enter Name" name="name" className="form-control rounded-0" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
          </div>
          <div className="mb-3">
            <label htmlFor="email"><strong>Email</strong></label>
            <input type="email" placeholder="Enter Email" name="email" className="form-control rounded-0" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
          </div>
          <div className="mb-3">
            <label htmlFor="password"><strong>Password</strong></label>
            <input type="password" placeholder="Enter Password" name="password" className="form-control rounded-0" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">Sign Up</button>
          <p>You are agreeing to our terms and policies</p>
          <a href="/" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Go to Home</a>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
