//------- Survey Interfaces -------//
export interface AddSurveyInterface {
    email?: string;
    horror_knowledge: number;
    gaming_knowledge: number;
    survey_data: Array<SurveyDataInterface>;
}

export interface SurveyDataInterface {
    game_id: number;
    received_order: number;
    scary_scale: number;
    tension_scale: number;
    assumed_name?: string;
}
