import express from 'express'
import { Mongo } from './database/mongodb'
import { config } from 'dotenv'




config()

async function main() {

    const hostName: string = 'localhost'
    const port: number = 3000

    const app = express()

    app.use(express.json())

    const mongoConnection = await Mongo.connect({
        mongoConnectionString: 'mongodb+srv://tiagozk061:VidcCl52tB0SaOES@portfolioth.4boje81.mongodb.net/?retryWrites=true&w=majority&appName=portfolioth', 
        mongoDbName: 'portfolioth',
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