import express from 'express';
import { errorMiddleware } from './middleware/error-middleware.js';
import controller from './controller/controller.js';
import 'dotenv/config';
import cors from 'cors';

export const app = express();
const PORT = process.env.APP_PORT || 5000;;

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    methods: ['GET', 'POST'],
    credentials: true
}));

app.use(express.json());

app.post('/api/rsvp', controller.addRsvp);
app.get('/api/ucapan', controller.getUcapan);
app.get('/api/rsvp', controller.getRsvp);

app.use(errorMiddleware);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));