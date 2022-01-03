import * as mongo from "mongodb";
export class MongoHelper {
    private connection: mongo.MongoClient;
    private static instance: MongoHelper;
    private dbName = 'express_ts';
    private connectionString = process.env.MONGO_DB_URL || 'mongodb://localhost:27017/rocketchat_test';
    constructor() {
    }
    public connect(url: string): Promise<any> {
        console.log("url -->", url)
        return new Promise<any>((resolve, reject) => {
            if (!this.connection) {
                mongo.MongoClient.connect(url, { useUnifiedTopology: true }, (err, client: mongo.MongoClient) => {
                    if (err) {
                        console.log(" ----- error connection line no 16 ----- \n", err);
                        reject(err);
                    } else {
                        console.log("---- connecting to common db ---- \n")
                        this.connection = client;
                        console.log("---- success connection ---- \n",)
                        resolve(client);
                    }
                });
            } else {
                resolve(this.connection);
            }
        });
    }
    public async getConnection() {
        let connection = await this.connect(this.connectionString);
        return await connection.db(this.dbName);
    }
    public static getInstance(): MongoHelper {
        if (!this.instance) {
            console.log("---- Instance not avail then create instance ----")
            this.instance = new MongoHelper;
        } else {
            console.log("---- Existing instance ----")
        }
        return this.instance;
    }
    public async insertOne(collection: string, insertData: any) {
        try {
            let db = await this.getConnection();
            return await db.collection(collection).insertOne(insertData);
        } catch (e) {

        }

    }
}