import express from 'express'
import { Mongo } from './database/mongodb'
import { config } from 'dotenv'




config()

async function main() {

    const hostName: string = 'localhost'
    const port: number = 3000

    const app = express()

    app.use(express.json())

    if (!process.env.MONGO_CS || !process.env.MONGO_DB_NAME) {
        throw new Error("Variáveis de ambiente do MongoDB não configuradas!");
    }

    const mongoConnection = await Mongo.connect({
        mongoConnectionString: process.env.MONGO_CS, 
        mongoDbName: process.env.MONGO_DB_NAME , 
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