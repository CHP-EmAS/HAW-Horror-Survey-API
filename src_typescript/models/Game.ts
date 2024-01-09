import { Model, DataTypes} from "sequelize";

import { database, databaseSchema } from "../config/database";

//------- Class for Game Model-------//
export class GameModel extends Model {
    public id!: number;
    public name!: string;
    public isHorror!: boolean;
}

//------- Init Sequelize-Model -------//
GameModel.init(
{
    id: {
        type: DataTypes.SMALLINT,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    isHorror: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}, {
    timestamps: false, 
    freezeTableName: true,
    tableName: 'game',
    sequelize: database,
    schema: databaseSchema
});