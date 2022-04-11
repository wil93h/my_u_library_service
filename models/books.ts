import { DataTypes } from "sequelize";
import db from "../db/connection";
 
const Book = db.define('books',{
    title: {
        type: DataTypes.STRING,
    },
    author: {
        type: DataTypes.STRING,
    },
    published_year: {
        type: DataTypes.STRING,
    },
    genre: {
        type: DataTypes.STRING,
    },
    qty: {
        type: DataTypes.FLOAT,
    },
});

export default Book;