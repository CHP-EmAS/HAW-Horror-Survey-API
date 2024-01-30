import { Model, DataTypes} from "sequelize";

import { database, databaseSchema } from "../config/database";

//------- Class for Email Model-------//
export class EmailModel extends Model {
    public email!: string;
}

//------- Init Sequelize-Model -------//
EmailModel.init(
{
    email: {
        type: DataTypes.TEXT,
        primaryKey: true,
        allowNull: false
    }
}, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'email',
    sequelize: database,
    schema: databaseSchema
});