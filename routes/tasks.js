const express = require('express');
const {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
} = require('../data/tasks');

const router = express.Router();


router.get('/', (req, res) => {
  const tasks = getAllTasks();
  res.json(tasks);
});

router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const task = getTaskById(id);

  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }

  res.json(task);
});


router.post('/', (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({ error: 'Title and description are required' });
  }

  const newTask = createTask({ title, description });
  res.status(201).json(newTask);
});


router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, description } = req.body;

  if (!title && !description) {
    return res.status(400).json({ error: 'At least one field (title or description) is required' });
  }

  const updatedTask = updateTask(id, { title, description });

  if (!updatedTask) {
    return res.status(404).json({ error: 'Task not found' });
  }

  res.json(updatedTask);
});


router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const deletedTask = deleteTask(id);

  if (!deletedTask) {
    return res.status(404).json({ error: 'Task not found' });
  }

  res.json({ message: 'Task deleted successfully' });
});

module.exports = router;
