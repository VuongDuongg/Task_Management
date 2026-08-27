import express from "express";
import { GetAllTasks, CreateTask, UpdateTask, DeleteTask } from "../controllers/TasksControllers.js";

const router = express.Router();

router.get("/", GetAllTasks);

router.post("/", CreateTask);

router.put("/:id", UpdateTask);

router.delete("/:id", DeleteTask);

export default router;