import { Request, RequestProvider, Response } from '../http';
export declare class AxiosProvider implements RequestProvider {
    execute: ({ uri, verb, body, transform, options }: Request) => Promise<Response>;
}
