import  express  from 'express';
import morgan from 'morgan';
import authRoutes from './routes/auth.routes.js';
import tasRoutes from './routes/task.routes.js';
import cookieParser from 'cookie-parser';

const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser()); // para manejar y acceder de forma mas facil  a las cookies
app.use("/api", authRoutes);
app.use("/api", tasRoutes);


export default app;