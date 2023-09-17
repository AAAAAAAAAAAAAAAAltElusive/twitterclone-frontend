import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";
import { LOGIN_ENDPOINT } from "../utils/endpoints.ts";

interface FormValues {
  username: string;
  password: string;
}

function Login() {
  const [cookies] = useCookies();
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (cookies.jwt) {
  //     navigate("/");
  //   }
  // }, []);

  const [values, setValues] = useState<FormValues>({ username: "", password: "" });
  const generateError = (error: string) =>
    toast.error(error, {
      position: "bottom-right",
    });
    
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const { data } = await axios.post(
        LOGIN_ENDPOINT,
        {
          ...values,
        },
        { withCredentials: true }
      );
      if (data) {
        if (data.errors) {
          const { username, password } = data.errors;
          if (username) generateError(username);
          else if (password) generateError(password);
        } else {
          navigate("/");
        }
      }
    } catch (ex) {
      console.log(ex);
    }
  };
  return (
<div className="h-screen flex flex-col justify-center items-center">
<img src="/twitterLogo.png" alt="Twitter Logo" className="max-h-12 max-w-12 m-5" />
  <div className="bg-white px-3 py-3 pb-2 rounded-md border-t-4 border-t-blue-500 w-full max-w-md">
    <h2 className="text-2xl font-weight-light font-inter mx-2 my-2">Login to your Account</h2>
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-0.5">
          <label htmlFor="username">Username</label>
          <input
            type="username"
            name="username"
            placeholder="Username"
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
            className="w-full p-3 border border-gray-300 rounded-md font-inter"
          />
        </div>
        <div className="flex flex-col gap-0.5">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
            className="w-full p-3 border border-gray-300 rounded-md font-inter"
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full p-3 bg-blue-500 text-white rounded-md font-inter mt-4 my-4"
      >
        Submit
      </button>
      <span className="mt-10 text-center">
        Don't have an account ?<Link to="/register" className="text-blue-500 font-inter"> Register </Link>
      </span>
    </form>
    <ToastContainer />
  </div>
</div>


  );
}

export default Login;
