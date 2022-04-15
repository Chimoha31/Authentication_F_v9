import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Account from './components/Account';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

const App = () => {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold">
        Firebase Authentication & Context
      </h1>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </div>
  )
}

export default App
