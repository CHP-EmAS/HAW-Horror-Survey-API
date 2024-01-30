import Joi from 'joi';
import * as customError from "../config/errorCodes" 

export const surveyDataSchema = Joi.object({
    game_id:
        Joi.number()
        .min(0).max(14)
        .required()
        .error(new Error(customError.missingArgument)),
    received_order: 
        Joi.number()
        .min(0).max(14)
        .error(new Error(customError.invalidData))
        .required()
        .error(new Error(customError.missingArgument)),
    scary_scale:
        Joi.number()
        .min(0).max(3)
        .error(new Error(customError.invalidData))
        .required()
        .error(new Error(customError.missingArgument)),
    tension_scale:
        Joi.number()
        .min(0).max(3)
        .error(new Error(customError.invalidData))
        .required()
        .error(new Error(customError.missingArgument)),
    assumed_name:
        Joi.string()
        .max(100)
        .error(new Error(customError.invalidData))
});

export const addSurveySchema = Joi.object({
    email:
        Joi.string()
        .optional(),
    horror_knowledge:
        Joi.number()
        .min(0).max(3)
        .error(new Error(customError.invalidData))
        .required()
        .error(new Error(customError.missingArgument)),
    gaming_knowledge:
        Joi.number()
        .min(0).max(3)
        .error(new Error(customError.invalidData))
        .required()
        .error(new Error(customError.missingArgument)),
    survey_data:
        Joi.array()
        .items(surveyDataSchema)
        .required()
        .error(new Error(customError.missingArgument))
        .length(15)
        .error(new Error(customError.invalidData))
});

