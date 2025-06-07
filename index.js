const express = require('express');
const tasksRouter = require('./routes/tasks');
const app = express();

const PORT = 3000;

app.use(express.json());

app.use('/tasks', tasksRouter);

app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

app.use((err, req, res, next) => {
  console.error('Internal server error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
