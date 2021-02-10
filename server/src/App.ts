import * as express from 'express';
import * as chalk from "chalk";
import { SampleRoute } from './modules/SampleModule/Routes/SampleRoute';
class App {
    public app: express.Application;
    constructor() {
        this.app = express();
        this._setRoutes();
    }
    private _setRoutes(): void {
        try {
            this.app.use('/sample', SampleRoute.getInstance().router);
            this.app.all("*", (req, res) => {
                res.status(404).send({
                    statusCode: 404,
                    messaage: "Not Found !!!"
                });
            });
        } catch (error) {
            console.log(chalk.red(error));
        }
    }
}
export default new App().app;