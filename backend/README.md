# Task Management API

This is a simple RESTful API for managing a to-do list, built with Node.js, Express, and MongoDB.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js and npm installed on your machine. You also need a running instance of MongoDB.

### Installing

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd <project-directory>
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Application

To run the application, you will need to have `nodemon` installed, or you can run the `index.js` file directly with `node`.

To run with `nodemon`:
```bash
nodemon index.js
```

To run with `node`:
```bash
node index.js
```

The server will start on port 3100 by default. You can change the port by setting the `PORT` environment variable.

## Environment Variables

The following environment variables are used to configure the application:

- `PORT`: The port on which the server will run. Defaults to `3100`.
- `DB_CONN_STR`: The connection string for the MongoDB database. **(Required)**
- `USE_DB_AUTH`: Set to `true` to enable database authentication.
- `DB_USERNAME`: The username for the database. Required if `USE_DB_AUTH` is `true`.
- `DB_PASSWORD`: The password for the database. Required if `USE_DB_AUTH` is `true`.

## API Endpoints

The API provides the following endpoints for managing tasks.

### Create a Task

- **URL:** `/courses`
- **Method:** `POST`
- **Body:**
  ```json
  {
      "task": "Your task description",
      "completed": false
  }
  ```
- **Success Response:**
  - **Code:** 200
  - **Content:** The created task object.
    ```json
    {
        "_id": "60d5f1b3e7b3c2a4e8d3e8c7",
        "task": "Your task description",
        "completed": false,
        "__v": 0
    }
    ```

### Get all Tasks

- **URL:** `/courses`
- **Method:** `GET`
- **Success Response:**
  - **Code:** 200
  - **Content:** An array of task objects.
    ```json
    [
        {
            "_id": "60d5f1b3e7b3c2a4e8d3e8c7",
            "task": "Your task description",
            "completed": false,
            "__v": 0
        }
    ]
    ```

### Update a Task

- **URL:** `/courses/:id`
- **Method:** `PUT`
- **URL Params:** `id=[string]` where `id` is the task ID.
- **Body:**
  ```json
  {
      "task": "Updated task description",
      "completed": true
  }
  ```
- **Success Response:**
  - **Code:** 200
  - **Content:** The updated task object before the update.

### Delete a Task

- **URL:** `/courses/:id`
- **Method:** `DELETE`
- **URL Params:** `id=[string]` where `id` is the task ID.
- **Success Response:**
  - **Code:** 200
  - **Content:** The deleted task object.
