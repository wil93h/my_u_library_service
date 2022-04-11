import { DataTypes } from "sequelize";
import db from "../db/connection";
 
const User = db.define('User',{

    // id: {
    //     type: DataTypes.INTEGER,
    //     primaryKey: true
    // },    
    firstName: {
        type: DataTypes.STRING,
    },

});

export default User;