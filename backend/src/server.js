import  express from 'express';
import tasksRouter from './routes/TasksRouters.js';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;


app.use(express.json());

app.use("/api/tasks", tasksRouter);

connectDB().then(() => {
app.listen(PORT, () => {
  console.log(`Server dang lang nghe tren cong ${PORT}`);
});}
)
