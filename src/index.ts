import dotenv from 'dotenv';
import Server from './models/server';

dotenv.config();

const server = new Server()

server.listen();


// const app = express();
// app.use(express.json());



// app.get('/ping', (_req, res) => {
    
//     console.log('someone pinged here!!');
//     res.send('hi')
// })  
// app.use('/api/diaries',diaryRouter);
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`)
// })