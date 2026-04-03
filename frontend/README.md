# Perseverance Software Training Institute - Frontend

This is the frontend for the Perseverance Software Training Institute website. It is a single-page application built with React.

## Features

*   **Course Information:** View a list of featured courses offered by the institute.
*   **About Us:** Learn more about the institute's mission and values.
*   **Contact Information:** Easily find contact details for the institute.
*   **Interested Courses List:** A simple to-do list feature to keep track of courses you are interested in.
*   **Responsive Design:** The application is designed to work on different screen sizes.

## Tech Stack

*   **Frontend:**
    *   [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
    *   [Material-UI](https://mui.com/) - A popular React UI framework.
    *   [Axios](https://axios-http.com/) - A promise-based HTTP client for the browser and Node.js.
*   **Web Server:**
    *   [Nginx](https://www.nginx.com/) - A high-performance web server.
*   **Containerization:**
    *   [Docker](https://www.docker.com/) - A platform for developing, shipping, and running applications in containers.
*   **CI/CD:**
    *   [Azure Pipelines](https://azure.microsoft.com/en-us/services/devops/pipelines/) - A cloud service for building and testing projects automatically.
*   **Deployment:**
    *   [Kubernetes](https://kubernetes.io/) - An open-source system for automating deployment, scaling, and management of containerized applications.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js and npm installed on your machine.

*   [Node.js](https://nodejs.org/en/)
*   [npm](https://www.npmjs.com/get-npm)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

### Running the Application

To run the application in development mode, use the following command:

```bash
npm start
```

This will open the application in your default browser at `http://localhost:3000`.

## Building for Production

To create a production build of the application, run the following command:

```bash
npm run build
```

This will create a `build` directory with the optimized and minified files for production.

## Deployment

This application is designed to be deployed using Docker and Kubernetes.

### Docker

The `Dockerfile` in the root of the repository is used to build a Docker image for the application. It's a multi-stage build that first builds the React app and then serves the static files using Nginx.

To build the Docker image, run:

```bash
docker build -t perseverance-frontend .
```

### Kubernetes

The `frontend.yml` file contains the Kubernetes deployment and service configuration. The application is deployed to a Kubernetes cluster using Azure Pipelines.

The pipeline automates the following steps:
1.  Builds the Docker image.
2.  Pushes the image to Azure Container Registry.
3.  Updates the Kubernetes manifest with the new image tag.
4.  Deploys the application to the Kubernetes cluster.

## Configuration

The application can be configured using environment variables.

*   `REACT_APP_BACKEND_URL`: The URL of the backend API. This is used by `src/services/taskServices.js` to make API calls.

To configure the application locally, you can create a `.env` file in the root of the project and add the following line:

```
REACT_APP_BACKEND_URL=http://your-backend-api-url
```
