import { Model, DataTypes} from "sequelize";

import { database, databaseSchema } from "../config/database";

//------- Class for Game Model-------//
export class EmailModel extends Model {
    public id!: number;
    public name!: string;
    public isHorror!: boolean;
}

//------- Init Sequelize-Model -------//
EmailModel.init(
{
    email: {
        type: DataTypes.TEXT,
        primaryKey: true,
        allowNull: false
    }
},
{
    timestamps: true, 
    createdAt: false, 
    updatedAt: false,
    freezeTableName: true,
    tableName: 'email',
    sequelize: database,
    schema: databaseSchema
});