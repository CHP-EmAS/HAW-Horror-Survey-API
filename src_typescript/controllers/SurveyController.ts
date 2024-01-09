import { Request, Response } from "express";

import toObj from "../config/responseStandart"

import { v4 as uuidv4 } from 'uuid';
import { AddSurveyInterface } from "../validation/interfaces";
import { addSurveySchema } from "../validation/surveyValidationSchemas";
import { SurveyModel } from "../models/Survey";
import { SurveyDataModel } from "../models/SurveyData";
import { EmailModel } from "../models/Email";

class SurveyController {

    private static allowSurveyCreation: boolean = true;

    //POST Add Survey
    public static async addSurvey(request: Request, response: Response) {

        if(!this.allowSurveyCreation) {
            return response.status(403).json(toObj(response));
        }

        try{
            const requestParams: AddSurveyInterface = request.body;
    
            const { error } = addSurveySchema.validate(requestParams);
            if(error) return response.status(400).json(toObj(response,{Error: error.message}));

            const foundEmail: (EmailModel | null) = await EmailModel.findByPk(requestParams.email);
            if(foundEmail != null) {
                return response.status(418).json(toObj(response));
            }

            console.log("Creating new Survey: " + JSON.stringify(requestParams))

            let survey = new SurveyModel();

            survey.id = uuidv4();
            survey.horror_knowledge = requestParams.horror_knowledge;
            survey.gaming_knowledge = requestParams.gaming_knowledge;

            const addedSurvey: SurveyModel = await survey.save();

            for (const data of requestParams.survey_data) {
                let surveyData = new SurveyDataModel;
                
                surveyData.survey_id = addedSurvey.id;
                surveyData.game_id = data.game_id;
                surveyData.received_order = data.received_order;
                surveyData.scary_scale = data.scary_scale;
                surveyData.assumed_name = data.assumed_name ?? ""
                surveyData.was_assumed = 0;

                await surveyData.save()
            };

            let newEmailEntry: any = new EmailModel()
            newEmailEntry.email = requestParams.email;
            newEmailEntry.lottery = requestParams.lottery;
            newEmailEntry.save();

            return response.status(201).json(toObj(response));

        } catch ( error ) {
            console.error(error);
            response.status(500).json(toObj(response));
        }
    }

    //Toggle Creation
    public static toggleSubmission() {
        SurveyController.allowSurveyCreation = !SurveyController.allowSurveyCreation;
    }
}

export default SurveyController;
