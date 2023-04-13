import { React, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/users";
      const { data: res } = await axios.post(url, data);
      navigate("/login");
      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };
  const googleAuth = () => {
    window.open(
      `${process.env.REACT_APP_API_URL}/auth/google/callback`,
      "_self"
    );
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <form
        className="bg-gray-100 w-3/5 h-3/4 flex flex-col justify-center items-center p-5 my-10"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Full Name"
          name="name"
          onChange={handleChange}
          value={data.firstName}
          className="p-3 m-2 border-2 border-gray-400 hover:border-black w-full"
          required
        />
        <input
          type="email"
          placeholder="Your Email Here"
          name="email"
          onChange={handleChange}
          value={data.email}
          className="p-3 m-2 border-2 border-gray-400 hover:border-black w-full"
          required
        />
        <input
          type="password"
          placeholder="Password Please"
          name="password"
          onChange={handleChange}
          value={data.password}
          className="p-3 m-2 border-2 border-gray-400 hover:border-black w-full"
          required
        />
        {error && <div className="text-red">{error}</div>}
        <button
          type="submit"
          className="bg-yellow-600 w-32 h-9 p-3 my-2 flex justify-center items-center"
        >
          Sign Up
        </button>
        Or
        <button
          className="bg-blue-600 w-40 h-10 text-white m-4"
          onClick={googleAuth}
        >
          Login with Google
        </button>
      </form>
    </div>
  );
};

export default Signup;
