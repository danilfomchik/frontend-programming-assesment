import type { AxiosResponse } from "axios";
import axios, { AxiosError } from "axios";

import { IError, IFetch } from "./types";

export const fetchWrap = async ({
    request,
    method = "GET",
    responseType = "json",
}: IFetch) => {
    return axios
        .request({
            url: request.url,
            method,
            data: request.body,
            responseType: responseType,
        })
        .then((res: AxiosResponse) => {
            return res.data;
        })
        .catch((err: AxiosError<IError>) => {
            throw err || "error";
        });
};
