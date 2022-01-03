import { HttpHelper } from "./Helpers/HttpHelper";

export abstract class CoreController {
    protected httpHelper: any;
    constructor() {
        this.httpHelper = HttpHelper;
    }
}