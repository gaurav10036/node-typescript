import { CoreRoutes } from "../../../Core/CoreRoutes";
import * as  express from "express";
import { SampleController } from "../Controllers/SampleController";

export class SampleRoute extends CoreRoutes {
    private static _instance: SampleRoute;
    private controller: SampleController;
    constructor() {
        super();
        this.controller = SampleController.getInstance();    
    }
    public static getInstance() {
        if (!this._instance) {
            this._instance = new SampleRoute;
        }
        return this._instance;
    }
    loadRoutes() {
        try {
            this.router.get('/', (req: express.Request, res: express.Response) => {
                this.controller.root(req, res);
            })
        } catch (error) {
            throw new Error('Some Error !! ');
        }

    }
}