import { Router} from "express";

import SurveyController from "../controllers/SurveyController";

// ######### /api route ######### //

const router = Router({ mergeParams: true })

//add survey
router.post("/survey", SurveyController.addSurvey)

export default router
