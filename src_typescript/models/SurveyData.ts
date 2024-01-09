import { Model, DataTypes} from "sequelize";

import { database, databaseSchema } from "../config/database";
import { GameModel } from "./Game";
import { SurveyModel } from "./Survey";

//------- Class for SurveyData Model-------//
export class SurveyDataModel extends Model {
    public survey_id!: string;
    public game_id!: number;
    public received_order!: number;
    public scary_scale!: number;
    public assumed_name!: string;
    public was_assumed!: number;
    public surveyObject!: SurveyModel;
    public gameObject!: GameModel;
}

//------- Init Sequelize-Model -------//
SurveyDataModel.init(
{
    survey_id: {
        type: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    game_id: {
        type: DataTypes.SMALLINT,
        primaryKey: true,
        allowNull: false
    },
    received_order: {
        type: DataTypes.SMALLINT,
        allowNull: false
    },
    scary_scale: {
        type: DataTypes.SMALLINT,
        allowNull: false
    },
    assumed_name: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    was_assumed: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0
    }

}, {
    timestamps: false, 
    freezeTableName: true,
    tableName: 'survey_data',
    sequelize: database,
    schema: databaseSchema
});

SurveyDataModel.belongsTo(SurveyModel, {foreignKey: 'survey_id', targetKey: 'id', as: 'calendarObject'});
SurveyDataModel.belongsTo(GameModel, {foreignKey: 'game_id', targetKey: 'id', as: 'gameObject'});