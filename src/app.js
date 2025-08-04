import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import notificationRoutes from './routes/notificationRoutes.js';
import { handleError } from './utils/error.js';

const PORT = process.env.PORT || 5001;

const app = express();

app.use(express.json())
app.use(cors());
app.use('/api/v1',notificationRoutes)
app.use(handleError)

// app.listen(PORT, ()=>{
//   console.log(`Server is listening on PORT, ${PORT}`)
// })
export const server = app.listen(PORT)
export default app;