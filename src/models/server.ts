import express, { Application } from 'express';
import userRoutes from '../routes/user';
import bookRoutes from '../routes/book';
import adminRoutes from '../routes/administrator';

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
        this.routes();
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