import express from "express"
import dotenv from "dotenv"
import recipieRoute from "./Routes/recipie.route.js"
import { dbConnect } from "./config/db.config.js"
import cors from "cors"
import userRoute from "./Routes/user.route.js"


dotenv.config()
const app = express()
app.use(express.json())
await dbConnect()
app.use(cors())

app.use("/recipie" , recipieRoute)
app.use("/", userRoute); 


app.listen(process.env.PORT || 3000, err => {
    if (err) {
        return process.exit(1)
    }
    console.log("Port running on 3000...")

})



 

