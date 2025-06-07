Here is a complete **documentation** of your Node.js Task Management API, based on your current file structure and code:

---

## 📁 Project Structure

```
Todo App-Backend/
│
├── index.js               # Main server file
├── data/
│   └── tasks.js           # In-memory task data and logic
├── routes/
│   └── tasks.js           # Task-related API routes
└── package.json           # Project metadata and dependencies
```

---

## 📄 index.js

### Purpose

Sets up the Express server, configures middleware, mounts routes, and handles global errors.

### Key Functions

* **Starts the server** on `PORT 3000`
* **Parses JSON** request bodies using `express.json()`
* **Mounts** task-related routes under `/tasks`
* **Handles 404** for unknown endpoints
* **Handles 500** for internal server errors

---

## 📄 routes/tasks.js

### Purpose

Defines all task-related RESTful API routes using Express Router.

### Imported Functions

From `../data/tasks`:

* `getAllTasks()`
* `getTaskById(id)`
* `createTask({ title, description })`
* `updateTask(id, { title, description })`
* `deleteTask(id)`

### Endpoints

#### `GET /tasks`

* **Description**: Get all tasks
* **Response**: `200 OK` with array of tasks

#### `GET /tasks/:id`

* **Description**: Get task by ID
* **Response**:

  * `200 OK` with task object
  * `404 Not Found` if task doesn't exist

#### `POST /tasks`

* **Description**: Create a new task
* **Request Body**:

  ```json
  {
    "title": "Task title",
    "description": "Task description"
  }
  ```
* **Response**:

  * `201 Created` with new task object
  * `400 Bad Request` if title or description missing

#### `PUT /tasks/:id`

* **Description**: Update an existing task
* **Request Body**:

  * Must include at least one of:

    ```json
    {
      "title": "New title",
      "description": "New description"
    }
    ```
* **Response**:

  * `200 OK` with updated task
  * `400 Bad Request` if body is empty
  * `404 Not Found` if task doesn't exist

#### `DELETE /tasks/:id`

* **Description**: Delete a task by ID
* **Response**:

  * `200 OK` with success message
  * `404 Not Found` if task doesn't exist

---

## 📄 data/tasks.js

### Purpose

Manages an in-memory list of tasks. No database used.

### Variables

* `tasks`: Array to store tasks
* `currentId`: Auto-incrementing ID for new tasks

### Functions

* **`getAllTasks()`**
  Returns all tasks in the system.

* **`getTaskById(id)`**
  Returns a single task matching the given ID.

* **`createTask({ title, description })`**
  Adds a new task with a unique ID.

* **`updateTask(id, updatedFields)`**
  Updates an existing task’s title or description.

* **`deleteTask(id)`**
  Removes a task from the list.

---

## 🧪 Example Task Object

```json
{
  "id": 1,
  "title": "Buy groceries",
  "description": "Milk, Eggs, Bread"
}
```

---

## 🚀 How to Run

1. Install dependencies (if any):

   ```bash
   npm install
   ```

2. Start the server:

   ```bash
   node index.js
   ```

3. Access the API at:
   [http://localhost:3000/tasks](http://localhost:3000/tasks)

---

## ✅ Future Improvements (Suggestions)

* Add a database (like MongoDB or PostgreSQL)
* Implement validation using a library (e.g., Joi)
* Add status field (e.g., `completed: true/false`)
* Add authentication middleware

---
