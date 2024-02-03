import React, { useState, useEffect } from "react";
import { Register_Background } from "../assets";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:8000/api/v1/auth/login", {
          email,
          password,
        })
        .then((res) => {
          if (res.data?.login) {
            localStorage.setItem("token", res.data?.token);
            navigate("/", { state: { id: email } });
          } else if (!res.data?.login) {
            alert("User does not exist, Please Sign Up");
          }
        })
        .catch((e) => {
          alert("wrong details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className=" min-h-screen bg-purple-500 ">
      <div className="container mx-auto py-40">
        <div className="flex flex-col lg:flex-row w-full lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div
            className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: `url(${Register_Background})` }}
          >
            <h1 className="text-white text-3xl mb-3 font-extrabold">Welcome</h1>
            <div>
              <p className="text-white text-[14px]">
                Get started on your journey to unravel the mysteries behind your
                dreams{" "}
                <a href="#" className="text-purple-500 font-semibold">
                  Learn more
                </a>
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 py-16 px-12">
            <h2 className="text-3xl mb-4 font-extrabold">Login</h2>
            <p className="mb-4 text-[14px]">
              Welcome Back! Login to delve into your dream s
            </p>
            <form action="POST">
              <div className="mt-5">
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="border border-gray-400 py-1 px-2 w-full"
                />
              </div>
              <div className="mt-5">
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="border border-gray-400 py-1 px-2 w-full"
                />
              </div>
              <div className="mt-5">
                <button
                  className="w-full bg-purple-500 py-3 text-center text-white rounded-xl"
                  onClick={handleSubmit}
                >
                  Login
                </button>
                <p className="text-blue">or</p>
                <Link to="/signup" className="w-full text-red-500 text-center">
                  Sign Up
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
