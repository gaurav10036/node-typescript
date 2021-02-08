import * as express from 'express';

class App
{
    public express: express.Application;
    constructor()
    {
        this.express = express();
    }
}