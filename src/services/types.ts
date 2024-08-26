import type { ResponseType } from "axios";

interface Request {
    url: string;
    body?: unknown;
}

export interface IFetch {
    method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
    request: Request;
    responseType?: ResponseType;
}

export interface IError {
    message: string | string[];
}
