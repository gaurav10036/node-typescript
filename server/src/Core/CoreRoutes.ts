import * as express from "express";
export abstract class CoreRoutes {
    public router: express.Router;

    constructor() {
            this.router = express.Router();
            this.loadRoutes();
    }
    abstract loadRoutes(): any;
}