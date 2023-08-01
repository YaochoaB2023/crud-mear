import Task from "../models/task.model.js";

export const getTasks = async (req,res) => {
    const tasks = await Task.find();
    res.json(tasks);
}

export const getTask = async (req,res) => {

    const task = await Task.findById(req.paramas.id);
    if(!task) return res.status(404).json({ message: 'task not found' });
    res.status(200).json(task);
}

export const createTask = async (req,res) => {

    const { title, description, date } = req.body;

    const newTask = new Task({
        title,
        description,
        date
    });
    const saveTask = await newTask.save(); 
    res.status(200).json(saveTask);

}

export const updateTask = async (req,res) => {
    
    const task = await Task.findByIdAndUpdate(req.paramas.id, req.body);
    if(!task) return res.status(404).json({ message: 'task not found' });
    res.status(201).json(task);

}

export const deleteTask = async (req,res) => {

    const task = await Task.findByIdAndDelete(req.paramas.id);
    if(!task) return res.status(404).json({ message: 'task not found' });
    return res.status(204);

}