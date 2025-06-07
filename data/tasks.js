let tasks = [];
let currentId = 1;

function getAllTasks() {
  return tasks;
}

function getTaskById(id) {
  return tasks.find(task => task.id === id);
}

function createTask({ title, description }) {
  const newTask = { id: currentId++, title, description };
  tasks.push(newTask);
  return newTask;
}

function updateTask(id, updatedFields) {
  const task = getTaskById(id);
  if (task) {
    Object.assign(task, updatedFields);
    return task;
  }
  return null;
}

function deleteTask(id) {
  const index = tasks.findIndex(task => task.id === id);
  if (index !== -1) {
    return tasks.splice(index, 1)[0];
  }
  return null;
}

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
