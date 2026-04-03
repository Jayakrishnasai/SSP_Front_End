# Deploy MongoDB to Kubernetes

This project provides a set of files to deploy a MongoDB instance to a Kubernetes cluster using Azure Pipelines.

## Prerequisites

Before you begin, ensure you have the following:

*   A running Kubernetes cluster.
*   An Azure DevOps account with a configured project.
*   A Kubernetes Service Connection in your Azure DevOps project named `k8sconnection` that connects to your cluster.
*   `kubectl` installed and configured to connect to your cluster if you want to deploy manually.

## Deployment

There are two ways to deploy MongoDB using this project:

### 1. Using Azure Pipelines

The `azure-pipelines.yml` file is set up to automatically deploy the MongoDB instance to the `three-tier` namespace in your Kubernetes cluster. To use it:

1.  Push the contents of this repository to a repository in your Azure DevOps project.
2.  Create a new pipeline in Azure DevOps and point it to the `azure-pipelines.yml` file in your repository.
3.  Run the pipeline. The pipeline will execute the `Deploy` stage and apply the Kubernetes manifests.

### 2. Manual Deployment using `kubectl`

If you prefer to deploy manually, you can use `kubectl`:

1.  **Create the namespace:**
    ```bash
    kubectl create namespace three-tier
    ```

2.  **Apply the Kubernetes manifests:**
    ```bash
    kubectl apply -f DB/database.yml
    ```

This will create the secret, deployment, and service in the `three-tier` namespace.

## Configuration

The `DB/database.yml` file contains the following Kubernetes resources:

*   **Secret (`db-secret`):** Stores the MongoDB username and password. The values are Base64 encoded.
    *   `username`: `admin` (decoded)
    *   `password`: `password123` (decoded)
*   **Deployment (`mongodb`):** Deploys the MongoDB container. It uses the `mongo:4.4.6` image and mounts a volume for data persistence. The root username and password are set from the `db-secret`.
*   **Service (`mongodb-svc`):** Exposes the MongoDB deployment on port 27017 within the `three-tier` namespace, allowing other applications in the same namespace to connect to it.
