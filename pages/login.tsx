import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import axios from 'axios';
import api from './api/api';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const API_URL = api.defaults.baseURL  ; //not sure

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');

    async function loginUser(email: string, password: string) {
      try {
        // this API URL looks like this http://localhost:3001
        const response = await axios.post(`${API_URL}/auth/login`, { email, password });
        return response.data;
      } catch (error) {
        throw error;
      }
    }

    try {
      const { accessToken, refreshToken } = await loginUser(email, password);
      
      // Store tokens in localStorage or secure cookie
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);

      // Redirect to dashboard or home page
      router.push('/student-view/myprogress'); // Replace with your actual route
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        setError(error.response.data.message || 'An error occurred during login');
      } else {
        setError('An unexpected error occurred');
      }
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#0f172a' }}>
      <Head>
        <title>Login - MDMS</title>
      </Head>
    
      <h1 className="text-white text-4xl mb-8">Master&apos;s Dissertation Management System</h1>
      
      <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', width: '300px' }}>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <h2 className="font-bold text-xl text-black">Login</h2>
          {error && <p className="text-red-500">{error}</p>}
          <label htmlFor="email" className="text-black">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border border-black rounded px-3 py-2 w-full text-black"
          />
          <label htmlFor="password" className="text-black">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border border-black rounded px-3 py-2 w-full text-black"
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;