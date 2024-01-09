import { Router, Request, Response } from "express";

import {API_VERSION} from "../horror_survey_api_server";

import toObj from "../config/responseStandart";

import apiRoute from "./apiRoute";
import staticRoute from "./staticRoute";

const routes = Router();

routes.use("/api", apiRoute);

//routes.use("/", staticRoute);

routes.get("/", function(request: Request, response: Response) {
    const welcomeMsg = { API_NAME: process.env.APP_NAME + " API", API_VERSION: API_VERSION};
    response.status(200).json(toObj(response,welcomeMsg));
});

routes.use("*", function(request: Request, response: Response) {
    response.status(404).json(toObj(response));
});

export default routes;
