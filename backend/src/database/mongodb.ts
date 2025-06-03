import { Db, MongoClient } from 'mongodb'


export const Mongo = {

    client : null as MongoClient | null,
    db: null as Db | null,

    async connect({ mongoConnectionString, mongoDbName }: {
        mongoConnectionString: string
        mongoDbName: string
    }): Promise<Db> {
        try{

            // Conecta ao servidor MongoDB
            this.client = new MongoClient(mongoConnectionString)

            await this.client.connect()

            // Seleciona o banco de dados
            this.db = this.client.db(mongoDbName)

            
           console.log(' Connected in MongoDB successful')
           return this.db
        }catch(error){
            console.error('Failed to connect to MongoDB:', error)
            throw error
        }
    },
}