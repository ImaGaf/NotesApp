import express, { json } from 'express';
import morgan from 'morgan';
import cors from 'cors';

// Importar rutas
import userRoutes from './routes/users';
import notesRoutes from './routes/notes';
import cathegoryRoutes from './routes/cathegory'

const app = express();

app.use(cors({
  origin: '*', 
  methods: ['GET', 'POST', 'DELETE', 'PUT', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  preflightContinue: false, 
}));


// Middlewares
app.use(morgan('dev'));
app.use(json());

// Rutas  
app.use('/api/users', userRoutes);
app.use('/api/notes', notesRoutes);
app.use('/api/cathegory', cathegoryRoutes);

export default app;
