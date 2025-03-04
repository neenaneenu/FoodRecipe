import {connect} from "mongoose"
import dotenv from "dotenv"

dotenv.config()

export const dbConnect =async ()=>{
    try {
        const {connection} = await connect(process.env.MONGO_DB, {
            dbName: "recipie_db"
        })
        const db = connection.db.databaseName
        console.log("connected:" , db)
    } catch (error) {
        
    }
}