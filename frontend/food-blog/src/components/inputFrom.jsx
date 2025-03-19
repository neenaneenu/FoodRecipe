import React, { useState } from "react";
import { api } from "../axios";
import { useDispatch } from "react-redux";
import { createUser } from "../Redux/userSlice";
import { toast } from "react-toastify"

export default function Input({ setIsOpen }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleOnSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      const { data } = await api.post("/signup", { email, username, password });
      console.log(data.token);
      localStorage.setItem("access_token", data.token);

      dispatch(createUser(data)); // Dispatch correct data
      toast.success("Account created");

      setIsOpen(false); // Close modal after signup
    } catch (err) {
      setError(err.response?.data.message || err.message);
      toast.error(err.response?.data.message || "Something went wrong");
      console.error(err);
    }
  };

  return (
    <>
      <form className="form" onSubmit={handleOnSubmit}>
        <div className="form-control">
          <label>Email</label>
          <input
            type="email"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-control">
          <label>Username</label>
          <input
            type="text"
            className="input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-control">
          <label>Password</label>
          <input
            type="password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">{isSignUp ? "Sign Up" : "Login"}</button>
        <br />
        {error && <h6 className="error">{error}</h6>}
        <br />
        <p onClick={() => setIsSignUp((prev) => !prev)}>
          {isSignUp ? "Already have an account" : "Create new account"}
        </p>
      </form>
    </>
  );
}



