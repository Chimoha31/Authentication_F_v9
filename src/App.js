import React from "react";
import { Routes, Route } from "react-router-dom";
import Account from "./components/Account";
import ProtectedRoute from "./components/ProtectedRoute";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { AuthContextProvider } from "./context/AuthContext";

const App = () => {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold">
        Firebase Auth & Context
      </h1>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
};

export default App;
