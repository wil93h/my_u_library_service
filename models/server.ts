import express, { Application } from 'express';
import userRoutes from '../routes/user';
import bookRoutes from '../routes/book';
import adminRoutes from '../routes/administrator';
import db from '../db/connection'
import cors from 'cors'
class Server {

    private app: Application;
    private port: string;
    private apiPath = {
        users:'/api/users',
        books:'/api/books',
        administrators:'/api/admin'
    }
    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8000';
        this.dbConnection();
        this.middleware();
        this.routes();

    }
    async dbConnection() {
            console.log('hollaaa')
        try {
        
            await db.authenticate();
            console.log("Connection has been established successfully.");
        } catch (error) {
            console.error("Unable to connect to the database:", error);
        }
    }
    middleware() {
        //CORS
        this.app.use(cors());

        //body
        this.app.use(express.json());

        this.app.use(express.static('public'));

    }
    routes() {
        this.app.use( this.apiPath.users, userRoutes);
        this.app.use( this.apiPath.books, bookRoutes);
        this.app.use( this.apiPath.administrators, adminRoutes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server listening on port ${this.port}`);
        });
    }
}

export default Server;