"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const server_1 = __importDefault(require("./models/server"));
// import db from './db/connection';
dotenv_1.default.config();
const server = new server_1.default();
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
//# sourceMappingURL=index.js.map