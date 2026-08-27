export const GetAllTasks = (req, res) => {
  res.status(200).send("Ban co viec can lam");
};

export const CreateTask = (req, res) => {
  res.status(200).json({ message: "Ban vua tao viec lam" });
};

export const UpdateTask = (req, res) => {
  res.status(200).json({ message: `Ban vua cap nhat viec lam co id la ${req.params.id}` });
};

export const DeleteTask = (req, res) => {
  res.status(200).json({ message: `Ban vua xoa viec lam co id la ${req.params.id}` });
};
