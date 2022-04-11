import { DataTypes } from "sequelize";
import db from "../db/connection";
 
const User = db.define('users',{
    firstName: {
        type: DataTypes.STRING,
    },
    lastName: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    color: {
        type: DataTypes.STRING,
    },
    role: {
        type: DataTypes.STRING,
    },
    status: {
        type: DataTypes.BOOLEAN,
    },
},
{ timestamps: false });

export default User;