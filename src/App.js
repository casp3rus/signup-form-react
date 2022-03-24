import './App.css';
import { useState } from 'react';

const initialFormData = {
  email: '',
  password: '',
  confirmPassword: '',
  isChecked: false
};

export default function App() {

  const [formData, setFormData] = useState(initialFormData)

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (!formData.email || !formData.password || !formData.confirmPassword) {
      alert('Please fill in all fields')
    } else if (formData.password !== formData.confirmPassword) {
      alert('Passwords to not match');
    } else {
      alert(`Successfully signed up. ${formData.isChecked ? 'Thanks for signing up for our newsletter!' : ''}`);
    }
    setFormData(initialFormData)
  }

  return (
    <div className="form-container">
      <form
        className="form"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          placeholder="Email address"
          className="form--input"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          className="form--input"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Confirm password"
          className="form--input"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        <div className="form--marketing">
          <input
            id="okayToEmail"
            type="checkbox"
            checked={formData.isChecked}
            name="isChecked"
            onChange={handleChange}

          />
          <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>
        <button
          className="form--submit"
        >
          Sign up
        </button>
      </form>
    </div>
  )
}
