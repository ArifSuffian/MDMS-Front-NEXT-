import React, { useState } from 'react';
import Head from 'next/head';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    // Add your login logic here
    console.log({ email, password });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#0f172a' }}>
      <Head>
        <title>Login - MDMS</title>
      </Head>
      
      <h1 className="text-white text-4xl mb-8">Master's Dissertation Management System</h1>
      
      <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', width: '300px' }}>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <h2 className="font-bold text-xl text-black">Login</h2>
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
