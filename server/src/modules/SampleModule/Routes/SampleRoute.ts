import { CoreRoutes } from "../../../Core/CoreRoutes";
import { Request, Response } from "express";
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
            this.router.get('/', (req: Request, res: Response) => {
                this.controller.root(req, res);
            });
            this.router.get('/test', (req: Request, res: Response) => {
                this.controller.test(req, res);
            });
        } catch (error) {
            throw new Error('Some Error !! ');
        }

    }
}