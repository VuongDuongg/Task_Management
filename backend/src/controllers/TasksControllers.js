import Task from "../models/Task.js";

export const GetAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find().sort({ createdAt: -1 });
        res.status(200).json(tasks);
    } catch (error) {
      console.error("Loi khi lay danh sach cong viec:", error);
        res.status(500).json({ message: error.message });
    }
};

export const CreateTask = async (req, res) => {
    try {
        const { title, description } = req.body;
        const task = new Task({ title, description });
        const newTask = await task.save();
        res.status(201).json(newTask);
    } catch (error) {
        console.error("Loi khi goi CreateTask:", error);
        res.status(500).json({ message:"Loi he thong" });
    }
};

export const UpdateTask = async (req, res) => {
    try {
        const { title, description, status, completedAt } = req.body;
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            { title, description, status, completedAt },
            { new: true }
        );
        if (!updatedTask) {
            return res.status(404).json({ message: "Cong viec khong ton tai" });
        };
        res.status(200).json(updatedTask);
    } catch (error) {
        console.error("Loi khi cap nhat cong viec:", error);
        res.status(500).json({ message:"Loi he thong" });
    }
};

export const DeleteTask = async (req, res) => {
    try {
        const deletedTask = await Task.findByIdAndDelete(req.params.id);
        if (!deletedTask) {
            return res.status(404).json({ message: "Cong viec khong ton tai" });
        }
        res.status(200).json(deletedTask);
    } catch (error) {
        console.error("Loi khi xoa cong viec:", error);
        res.status(500).json({ message:"Loi he thong" });
    }
};
