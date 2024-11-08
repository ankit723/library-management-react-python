import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AuthModal = ({ type, onClose }) => {
  const apiUrl = import.meta.env.VITE_BACKEND_URL;
  const [isSignIn, setIsSignIn] = useState(type === 'signin');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  // Toggles between sign-in and sign-up forms
  const handleToggleForm = () => {
    setIsSignIn(!isSignIn);
    // Reset form data when toggling
    setFormData({ name: '', email: '', password: '', confirmPassword: '', role: '' });
    setErrorMessage(''); // Reset error message
  };

  // Handles form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // API call for sign-up
  const handleSignUp = async () => {
    try {
      const response = await fetch(`${apiUrl}/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          role: formData.role,
        }),
      });
      const data = await response.json();

      if (response.ok) {
        // Store user data in local storage (or session storage)
        console.log(data.user)
        localStorage.setItem('user', JSON.stringify({ email: data.user.email, name:data.user.name, role: data.user.role, _id:data.user._id }));
        toast.success('Sign up successful!'); // Show success toast
        window.location.reload()
        onClose(); // Close modal after successful sign-up
      } else {
        setErrorMessage(data.message || 'Sign up failed');
        toast.error(data.message || 'Sign up failed'); // Show error toast
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('An error occurred during sign up.');
      toast.error('An error occurred during sign up.'); // Show error toast
    }
  };

  // API call for sign-in
  const handleSignIn = async () => {
    console.log("hello")
    try {
      const response = await fetch(`${apiUrl}/signin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });
      const data = await response.json();

      if (response.ok) {
        console.log(data)
        // Store user data in local storage (or session storage)
        localStorage.setItem('user', JSON.stringify({ email: data.email, role: data.role, name:data.name, _id:data._id }));
        toast.success('Sign in successful!'); // Show success toast
        window.location.reload()
        onClose(); // Close modal after successful sign-in
      } else {
        setErrorMessage(data.message || 'Sign in failed');
        toast.error(data.message || 'Sign in failed'); // Show error toast
      }
    } catch (error) {
      setErrorMessage('An error occurred during sign in.');
      toast.error('An error occurred during sign in.'); // Show error toast
    }
  };

  // Handles form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorMessage(''); // Clear previous error messages

    if (isSignIn) {
      handleSignIn(); // Call sign-in logic
    } else {
      if (formData.password !== formData.confirmPassword) {
        setErrorMessage("Passwords don't match");
        toast.error("Passwords don't match"); // Show error toast
        return;
      }
      handleSignUp(); // Call sign-up logic
    }
  };

  // Closes modal on 'Escape' key press
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose(); // Close modal
    }
  };

  // Adds event listener for Escape key press when modal is mounted
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose(); // Close on overlay click
      }}
    >
      <div className="bg-white p-8 rounded-lg shadow-md w-96 relative">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          {isSignIn ? 'Sign In' : 'Sign Up'}
        </h2>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          X
        </button>

        {errorMessage && (
          <div className="mb-4 text-red-500 text-sm text-center">{errorMessage}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isSignIn && (
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 p-2 w-full border rounded"
                placeholder="Name"
              />
            </div>
          )}
          
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border rounded"
              placeholder="Email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border rounded"
              placeholder="Password"
            />
          </div>

          {!isSignIn && (
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="mt-1 p-2 w-full border rounded"
                placeholder="Confirm Password"
              />
            </div>
          )}

          {!isSignIn && (
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Role
              </label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
                className="mt-1 p-2 w-full border rounded"
              >
                <option value="">Select a role</option>
                <option value="student">Student</option>
                <option value="librarian">Librarian</option>
                <option value="admin">Admin</option>
                {/* Add more roles as needed */}
              </select>
            </div>
          )}

          <button
            type="submit"
            className="w-full py-2 mt-4 bg-amber-800 text-white rounded hover:bg-amber-900"
          >
            {isSignIn ? 'Sign In' : 'Sign Up'}
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          {isSignIn ? "Don't have an account?" : 'Already have an account?'}{' '}
          <button
            onClick={handleToggleForm}
            className="text-amber-800 underline"
          >
            {isSignIn ? 'Sign Up' : 'Sign In'}
          </button>
        </p>
      </div>
      <ToastContainer /> {/* Add toast container here */}
    </div>
  );
};

export default AuthModal;
