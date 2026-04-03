<p align="center">
  <img src="https://img.shields.io/badge/PERSEVERANCE-Software%20Training%20Institute-64ffda?style=for-the-badge&labelColor=0a192f" alt="Perseverance Banner"/>
</p>

<h1 align="center">🎓 SSP MERN Project</h1>

<p align="center">
  <em>A full-stack, containerized web platform for Perseverance Software Training Institute — built with the MERN stack and deployed via Docker Compose.</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"/>
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js"/>
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express"/>
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB"/>
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker"/>
  <img src="https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white" alt="Nginx"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="TailwindCSS"/>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/AWS-EC2-FF9900?style=flat-square&logo=amazonec2&logoColor=white" alt="AWS EC2"/>
  <img src="https://img.shields.io/badge/Azure-DevOps-0078D7?style=flat-square&logo=azuredevops&logoColor=white" alt="Azure DevOps"/>
  <img src="https://img.shields.io/badge/Kubernetes-326CE5?style=flat-square&logo=kubernetes&logoColor=white" alt="Kubernetes"/>
  <img src="https://img.shields.io/badge/Mongoose-880000?style=flat-square&logo=mongoose&logoColor=white" alt="Mongoose"/>
  <img src="https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=axios&logoColor=white" alt="Axios"/>
</p>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Architecture](#-architecture)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Docker Compose Deployment](#-docker-compose-deployment)
- [AWS EC2 Deployment](#-aws-ec2-deployment)
- [API Endpoints](#-api-endpoints)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌟 Overview

**Perseverance Software Training Institute (SSP)** is a premium, Apple-style landing platform designed to showcase the institute's programs, leadership team, alumni success stories, and student testimonials. It features a full CRUD-enabled enrollment interest system backed by a MongoDB database.

### ✨ Key Features

| Feature | Description |
|---|---|
| 🎨 **Premium UI** | Apple-style design with glassmorphism, gradients, and micro-animations |
| 🌓 **Dark/Light Mode** | Fully adaptive theme system with `localStorage` persistence |
| 👥 **Leadership Grid** | Circular avatar carousel for institute leadership |
| 🏆 **Alumni Impact** | Centered avatar-based success story carousel |
| 💬 **Testimonials** | Interactive student testimonial carousel |
| 📝 **Enrollment CTA** | Full CRUD interest list (Add, Update, Delete) connected to MongoDB |
| 🐳 **Dockerized** | Single-command deployment with Docker Compose |
| 📱 **Responsive** | Mobile-first design across all breakpoints |

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────┐
│                   Docker Network                     │
│                  (ssp-network)                       │
│                                                     │
│  ┌─────────────┐   ┌──────────────┐   ┌──────────┐ │
│  │   Frontend   │   │   Backend    │   │ MongoDB  │ │
│  │   (Nginx)    │──▶│  (Node.js)   │──▶│  4.4.6   │ │
│  │   :8080      │   │   :3100      │   │  :27017  │ │
│  └─────────────┘   └──────────────┘   └──────────┘ │
│        │                                            │
└────────│────────────────────────────────────────────┘
         │
    ┌────▼────┐
    │ Browser │  http://localhost:8080
    └─────────┘
```

**Request Flow:**
```
Browser → Nginx (:8080/courses) → Express API (:3100) → MongoDB (:27017)
```

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| ![React](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black) | Component-based UI framework |
| ![TailwindCSS](https://img.shields.io/badge/-Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white) | Utility-first CSS framework |
| ![Axios](https://img.shields.io/badge/-Axios-5A29E4?style=flat-square&logo=axios&logoColor=white) | HTTP client for API calls |
| ![Nginx](https://img.shields.io/badge/-Nginx-009639?style=flat-square&logo=nginx&logoColor=white) | Static file server & reverse proxy |

### Backend
| Technology | Purpose |
|---|---|
| ![Node.js](https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white) | JavaScript runtime (v20) |
| ![Express](https://img.shields.io/badge/-Express-000000?style=flat-square&logo=express&logoColor=white) | RESTful API framework |
| ![Mongoose](https://img.shields.io/badge/-Mongoose-880000?style=flat-square&logo=mongoose&logoColor=white) | MongoDB ODM (v9.x) |

### Database
| Technology | Purpose |
|---|---|
| ![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white) | NoSQL document database (v4.4.6) |

### DevOps & Deployment
| Technology | Purpose |
|---|---|
| ![Docker](https://img.shields.io/badge/-Docker-2496ED?style=flat-square&logo=docker&logoColor=white) | Containerization |
| ![Docker Compose](https://img.shields.io/badge/-Docker_Compose-2496ED?style=flat-square&logo=docker&logoColor=white) | Multi-container orchestration |
| ![AWS EC2](https://img.shields.io/badge/-AWS_EC2-FF9900?style=flat-square&logo=amazonec2&logoColor=white) | Cloud compute deployment |
| ![Azure DevOps](https://img.shields.io/badge/-Azure_DevOps-0078D7?style=flat-square&logo=azuredevops&logoColor=white) | CI/CD pipelines |
| ![Kubernetes](https://img.shields.io/badge/-Kubernetes-326CE5?style=flat-square&logo=kubernetes&logoColor=white) | Container orchestration (production) |

---

## 📁 Project Structure

```
SSP_MERN_Project/
├── 📄 docker-compose.yml        # Full-stack orchestration
├── 📄 .gitignore                # Protects .env files
│
├── 🌐 frontend/
│   ├── 📄 Dockerfile            # Node 20-alpine → Nginx alpine
│   ├── 📄 nginx.conf            # Reverse proxy config
│   ├── 📄 package.json          # React dependencies
│   ├── 📁 public/
│   │   └── 📁 images/           # Team & student photos
│   └── 📁 src/
│       ├── 📄 App.js            # Main app component
│       ├── 📄 courses.js        # CRUD state management
│       ├── 📁 components/
│       │   ├── 📁 layout/       # Header, Footer, PageShell
│       │   ├── 📁 sections/     # Hero, Stats, Leadership, etc.
│       │   └── 📁 shared/       # AvatarCard, Badge, Button, Card
│       └── 📁 services/
│           └── 📄 taskServices.js  # Axios API client
│
├── ⚙️ backend/
│   ├── 📄 Dockerfile            # Node 20-alpine
│   ├── 📄 index.js              # Express server entry
│   ├── 📄 db.js                 # Mongoose connection
│   ├── 📁 models/
│   │   └── 📄 task.js           # Task/Course schema
│   ├── 📁 routes/
│   │   └── 📄 courses.js        # CRUD REST endpoints
│   ├── 📄 backend.yml           # Kubernetes deployment
│   └── 📄 azure-pipelines.yml   # CI/CD pipeline
│
└── 🍃 mongodb/
    ├── 📄 README.md             # MongoDB K8s deployment guide
    ├── 📁 DB/
    │   └── 📄 database.yml      # K8s Secret + Deployment + Service
    └── 📄 azure-pipelines.yml   # CI/CD for MongoDB
```

---

## 🚀 Getting Started

### Prerequisites

| Tool | Version | Install |
|---|---|---|
| ![Docker](https://img.shields.io/badge/-Docker-2496ED?style=flat-square&logo=docker&logoColor=white) | 20+ | [docker.com](https://docs.docker.com/get-docker/) |
| ![Git](https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white) | 2.30+ | [git-scm.com](https://git-scm.com/) |

### Clone the Repository

```bash
git clone https://github.com/Jayakrishnasai/SSP_MERN_Project.git
cd SSP_MERN_Project
```

---

## 🐳 Docker Compose Deployment

### One-Command Startup

```bash
docker compose up --build -d
```

This launches **3 containers** on a private Docker network:

| Service | Container | Port | Image |
|---|---|---|---|
| 🌐 Frontend | `frontend-webapp` | `8080:80` | `node:20-alpine` → `nginx:alpine` |
| ⚙️ Backend | `backend-api` | `3100:3100` | `node:20-alpine` |
| 🍃 MongoDB | `mongodb-server` | `27017:27017` | `mongo:4.4.6` |

### Access Points

| Service | URL |
|---|---|
| 🌐 Web App | [http://localhost:8080](http://localhost:8080) |
| ⚙️ API | [http://localhost:3100/courses](http://localhost:3100/courses) |

### Stop the Stack

```bash
docker compose down
```

### Reset Everything (including database)

```bash
docker compose down -v
```

---

## ☁️ AWS EC2 Deployment

### 1. Launch EC2 Instance

- **AMI:** Ubuntu 22.04 LTS
- **Instance Type:** t2.micro (Free Tier) or t2.small
- **Security Group Inbound Rules:**

| Port | Protocol | Source | Purpose |
|---|---|---|---|
| 22 | TCP | Your IP | SSH access |
| 8080 | TCP | 0.0.0.0/0 | Web app access |

### 2. Install Docker on EC2

```bash
sudo apt update
sudo apt install -y docker.io docker-compose-plugin
sudo usermod -aG docker $USER
newgrp docker
```

### 3. Deploy

```bash
git clone https://github.com/Jayakrishnasai/SSP_MERN_Project.git
cd SSP_MERN_Project
docker compose up --build -d
```

### 4. Access

```
http://<EC2-PUBLIC-IP>:8080
```

---

## 📡 API Endpoints

Base URL: `/courses`

| Method | Endpoint | Description | Body |
|---|---|---|---|
| `GET` | `/courses` | Get all courses/tasks | — |
| `POST` | `/courses` | Create a new course | `{ "task": "Course Name", "completed": false }` |
| `PUT` | `/courses/:id` | Update a course | `{ "task": "Updated Name", "completed": true }` |
| `DELETE` | `/courses/:id` | Delete a course | — |

### Example

```bash
# Create a course
curl -X POST http://localhost:3100/courses \
  -H "Content-Type: application/json" \
  -d '{"task": "Cloud Architecture", "completed": false}'

# Get all courses
curl http://localhost:3100/courses
```

---

## 🎨 UI Sections

| Section | Component | Description |
|---|---|---|
| 🏠 Hero | `Hero.js` | Animated landing with stats and CTA |
| 📊 Stats | `StatsStrip.js` | Animated counter strip |
| 🎯 Programs | `ProgramCard.js` | Training program showcase |
| ⚡ Features | `FeatureGrid.js` | Institute highlights grid |
| 👨‍💼 Leadership | `LeadershipGrid.js` | Circular avatar grid for team |
| 💬 Testimonials | `TestimonialCarousel.js` | Student review carousel |
| 🏆 Alumni | `SuccessStoryGrid.js` | Alumni success story carousel |
| 📝 Contact | `ContactCTA.js` | Enrollment form + CRUD task list |

---

## 🌓 Theme System

The platform supports **Light** and **Dark** modes with full adaptability:

```
Toggle → localStorage → document.documentElement.classList('dark')
```

| Component | Light Mode | Dark Mode |
|---|---|---|
| Header | Navy text, white bg | White text, navy bg |
| Hero | White bg, navy text | Navy bg, white text |
| Sections | White bg, gray accents | Navy bg, glass accents |

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the ISC License.

---

<p align="center">
  <img src="https://img.shields.io/badge/Built_with-❤️-red?style=flat-square" alt="Built with Love"/>
  <img src="https://img.shields.io/badge/By-Perseverance_Institute-64ffda?style=flat-square&labelColor=0a192f" alt="By Perseverance"/>
</p>

<p align="center">
  <sub>Made with 💻 by <a href="https://github.com/Jayakrishnasai">Jaya Krishna Sai</a></sub>
</p>
