import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { logo } from "./assets";
import { Home, CreatePost, SignUp, Login } from "./pages";

const App = () => (
  <BrowserRouter>
    <header className="w-full flex justify-center items-center flex-col bg-[#f9fafe]">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <Link to="/">
          <img src={logo} alt="logo" className="w-28 object-contain" />
        </Link>

        <div className="flex items-center">
          <Link
            to="/create-post"
            className="font-inter font-medium purple_gradient px-4 py-2 rounded-md border border-purple-500"
          >
            Dream
          </Link>

          <Link
            to="/login"
            className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md ml-4"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md ml-4"
          >
            Sign Up
          </Link>
        </div>
      </nav>
    </header>
    <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </main>
  </BrowserRouter>
);

export default App;
