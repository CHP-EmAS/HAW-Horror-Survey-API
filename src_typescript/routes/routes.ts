import { Router, Request, Response } from "express";

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
