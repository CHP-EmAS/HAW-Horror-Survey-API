import { Router } from "express";
import path from "path";

// ######### root route ######### //

const router = Router();

router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + '/../../static/html/home.html'));
});

router.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname + '/../../static/html/unity.html'));
});

export default router;