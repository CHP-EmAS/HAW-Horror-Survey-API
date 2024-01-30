import { Model, DataTypes} from "sequelize";

import { database, databaseSchema } from "../config/database";

//------- Class for Survey Model-------//
export class SurveyModel extends Model {
    public id!: string;
    public horror_knowledge!: number;
    public gaming_knowledge!: number;
    public email_already_submitted!: boolean;
    public readonly submitted_at!: Date;
}

//------- Init Sequelize-Model -------//
SurveyModel.init(
{
    id: {
        type: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    horror_knowledge: {
        type: DataTypes.SMALLINT,
        allowNull: false
    },
    gaming_knowledge: {
        type: DataTypes.SMALLINT,
        allowNull: false
    },
    email_already_submitted: {
        type: DataTypes.boolean,
        allowNull: false
    }
}, {
    timestamps: true, 
    createdAt: "submitted_at",
    updatedAt: false,
    freezeTableName: true,
    tableName: 'survey',
    sequelize: database,
    schema: databaseSchema
});