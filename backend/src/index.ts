import express from 'express'
import { Mongo } from './database/mongodb'
import dotenv from 'dotenv'




dotenv.config(); 

async function main() {

    const hostName: string = 'localhost'
    const port: number = 3000

    const app = express()

    app.use(express.json())

    const mongoConnection = await Mongo.connect({
        mongoConnectionString: process.env.MONGO_DB ?? "", 
        mongoDbName: process.env.MONGO_DB_NAME ?? "",
    })
    console.log(mongoConnection)
    app.get('/', (req, res) => {
        res.send("Welcome in My Portfolio")
    })

    app.listen(port, () => {
        console.log(`Server running on: http://${ hostName }:${port}`)
    })
}

main()