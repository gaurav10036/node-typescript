import { CoreController } from "../../../Core/CoreController";
import { Request, Response } from "express";

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
}