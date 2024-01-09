import { Router, Request, Response } from "express";

import {API_VERSION} from "../horror_survey_api_server";

import toObj from "../config/responseStandart";

import apiRoute from "./apiRoute";
import staticRoute from "./staticRoute";

const routes = Router();

routes.use("/api", apiRoute);

routes.use("/", staticRoute);

routes.use("*", function(request: Request, response: Response) {
    response.status(403).json(toObj(response));
});

export default routes;
