import { Router } from "express"
import userController from "../controllers/user.controller.js"


const userRoute = Router()

userRoute.get("/user/:id", userController.getUser)
userRoute.post("/login", userController.Login)
userRoute.post("/signup", userController.Signup)


export default userRoute

