import express from 'express';
import { errorMiddleware } from './middleware/error-middleware.js';
import userController from './controller/controller.js';
import 'dotenv/config';

export const app = express();
const PORT = process.env.APP_PORT || 5000;;

app.use(express.json());

app.post('/api/rsvp', userController.addRsvp);
app.get('/api/rsvp', userController.getRsvp);

app.use(errorMiddleware);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));