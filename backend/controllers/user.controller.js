import dotenv from "dotenv"
import { UserController } from "../models/user.model.js"
import bcrypt from "bcrypt"
import  jwt from "jsonwebtoken"

dotenv.config()


const Signup = async (req, res) => {
    try {
      const { email, password, username } = req.body
  
      // Validate input
      if (!email || !password || !username) {
        return res.status(400).send({ message: "Username, email, and password are required" })
      }
  
      // Check if the user already exists
      const existingUser = await UserController.findOne({ email })
      if (existingUser) {
        return res.status(400).send({ message: "Email already exists" })
      }
  
      // Hash the password and create the user
      const hashPwd = await bcrypt.hash(password, 10)
      const newUser = await UserController.create({
        username, // Include the username
        email,
        password: hashPwd,
      })
  
      // Generate a JWT token
      const token = jwt.sign({ id: newUser._id, email, username }, process.env.JWT_KEY, { expiresIn: "1h" })
      return res.status(201).send({ token, user: newUser })
    } catch (error) {
      console.error("Signup error:", error)
      return res.status(500).send({ message: "Internal server error" })
    }
  }
  
  

  const Login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Validate input
      if (!email || !password) {
        return res.status(401).send({ message: "Email and password are required" });
      }
      
  
      // Find the user by email

      const user = await UserController.findOne({ email });
      if (user && await bcrypt.compare(password, user.password)) {
        // Generate a JWT token
        const token = jwt.sign(
          { id: user._id, email, username: user.username },
          process.env.JWT_KEY,
          { expiresIn: "1h" }

        );
        return res.status(200).send({ token, user });
      } else {
        return res.status(401).send({ message: "Invalid credentials" });
      }
    } catch (error) {
      console.error("Login error:", error);
      return res.status(500).send({ message: "Internal server error" });
    }
  };
  
const getUser = async (res, req) =>{
  const getUser = async (req, res) => {
  try {
    const { id } = req.params; // Extract the 'id' from the URL parameter
    if (!id) {
      return res.status(400).send({ message: "User ID is required" });
    }

    const user = await UserController.findById(id);
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    return res.status(200).send({ user });
  } catch (error) {
    console.error("Error in getUser:", error);
    return res.status(500).send({ message: "Internal server error" });
  }
};

}

export default {
    Signup,Login,getUser
}