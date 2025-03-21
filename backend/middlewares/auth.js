import env from "dotenv"
import jwt from "jsonwebtoken"
env.config()

export const Auth =(req, res, next )=>{
    try {
        const tokenDAta = req.headers["authorization"]
        const response = jwt.verify(token, process.env.JWT_KEY)
        const [_,token] =  tokenDAta?.split("")
        const currentTime = Math.floor(new Date().getDate() / 1000)
        if (response.exp <= currentTime){
            return res.status(400).send({
                message: "unauthorized"
            })
        }
        next()
        
    } catch (error) {
        console.log(error)
        return res.status(500),send({
            message: "internall server error"
        })
    }
}