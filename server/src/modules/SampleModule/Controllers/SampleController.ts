import { CoreController } from "../../../Core/CoreController";
import { Request, Response } from "express";
import { MongoHelper } from "../../../Core/DB/MongoHelper";
export class SampleController extends CoreController {
    private static _instance: SampleController;
    constructor() {
        super();
    }
    public root(req: Request, res: Response) {
        res.status(200).send({
            status: 200,
            message: "GET Request Successfull!!",
        })
    }
    public static getInstance() {
        if (!this._instance) {
            this._instance = new SampleController;
        }
        return this._instance;
    }
    public async test(req: Request, res: Response) {
        console.log(req.body);
        let result = await MongoHelper.getInstance().insertOne('sample_collection', req.body);
        console.log(result.insertedId);
        this.httpHelper.setResponse(res, 200, 'Success !!!', { _id: result.insertedId });
        // let db = await MongoHelper.getInstance().connect(process.env.MONGO_DB_URL);
        // db = await db.db('express_ts');
        // let data = {
        //     name: "Aarav Sirauthiya",
        //     dob: "2021-02-15",
        //     place: "Gurgaon",
        //     pincode: 122001,
        //     father: "Gaurav Sirauthiya"
        // };
        // let q = {
        //     _id: new ObjectId("61bd9c506e47fb1fe2a1bc66")
        // };
        // //let insertData1 = await db.collection('sample_collection').insert(data);
        // let insertData = await db.collection('sample_collection').find(q).toArray();
        // let updateData = await db.collection('sample_collection').update(q, {
        //     $set: {
        //         dob: "2019-11-12"
        //     }
        // });
        // this.httpHelper.setResponse(res, 500, 'Success', updateData);
    }
}