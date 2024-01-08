//------- Survey Interfaces -------//
export interface AddSurveyInterface {
    horror_knowledge: number;
    gaming_knowledge: number;
    survey_data: Array<SurveyDataInterface>;
}

export interface SurveyDataInterface {
    game_id: number;
    order: number;
    scary_scale: number;
    assumed_name?: string;
}
