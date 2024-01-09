import { Model, DataTypes} from "sequelize";

import { database, databaseSchema } from "../config/database";

//------- Class for Email Model-------//
export class EmailModel extends Model {
    public email!: string;
    public lottery!: boolean;
}

//------- Init Sequelize-Model -------//
EmailModel.init(
{
    email: {
        type: DataTypes.TEXT,
        primaryKey: true,
        allowNull: false
    },
    lottery: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        defaultValue: false
    }
}, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'email',
    sequelize: database,
    schema: databaseSchema
});