import React from "react";
import { useFormik } from "formik";
import { api } from "../axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; // Ensure correct import
import { createUser } from "../Redux/userSlice";
import { toast } from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit: async (userData) => {
      try {
        const { data } = await api.post("http://localhost:3000/signup", userData);
        console.log(data.token);

        localStorage.setItem("access_token", data.token);
        dispatch(createUser(data)); // Corrected Redux dispatch

        toast.success("Account created successfully!");
        navigate("/");
      } catch (err) {
        toast.error(err.response?.data?.message || "Signup failed");
        console.error("Signup error:", err);
      }
    },
  });

  return (
    <div className="d-flex justify-content-center mt-4">
      <form onSubmit={formik.handleSubmit} className="w-50 d-flex flex-column gap-2">
        <input
          onChange={formik.handleChange}
          value={formik.values.username}
          className="p-2"
          type="text"
          name="username"
          placeholder="Enter username"
          required
        />
        <input
          onChange={formik.handleChange}
          value={formik.values.email}
          className="p-2"
          type="email"
          name="email"
          placeholder="Enter email"
          required
        />
        <input
          onChange={formik.handleChange}
          value={formik.values.password}
          className="p-2"
          type="password"
          name="password"
          placeholder="Enter password"
          required
        />
        <button className="btn btn-success w-100" type="submit">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Signup;
