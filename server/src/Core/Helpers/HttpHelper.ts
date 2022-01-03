import { Response } from 'express';
import { StatusCodes, getReasonPhrase } from 'http-status-codes';
export class HttpHelper {
    public static setResponse(res: Response, code: number, message: string, data: any): any {
        let statusCode = code || StatusCodes.BAD_REQUEST;
        let responseMessage = message || getReasonPhrase(statusCode);
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        return res.status(statusCode).send({
            statusCode: statusCode,
            message: responseMessage,
            data: data
        });
    }
}