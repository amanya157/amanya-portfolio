# Amanya Godfrey — Personal Portfolio

A modern, responsive personal portfolio website for **Amanya Godfrey**, a Full Stack Developer. The website showcases my skills, training, services, and provides visitors with an interactive AI assistant and a contact system.

## 🚀 Overview

This portfolio was built as a full-stack web application with a modern frontend and a Node.js backend.

Visitors can:

* Explore my professional profile
* Learn about my skills and training
* View the services I offer
* Support my work
* Send me a message through the contact form
* Interact with the AI assistant
* Use the website on desktop, tablet, and mobile devices

The backend handles contact messages, email notifications, AI requests, authentication, and database operations.

## ✨ Features

### Personal Portfolio

* Modern responsive design
* Professional navigation
* Hero section
* About section
* Skills section
* Training section
* Services section
* Support section
* Contact section
* Responsive footer
* Smooth and modern user experience

### 🤖 AI Assistant

The portfolio includes an AI-powered assistant that can:

* Answer questions about Amanya Godfrey
* Answer general questions
* Understand previous questions within a conversation
* Provide contextual follow-up answers
* Communicate with the backend securely

The AI functionality is handled through the backend so API credentials are not exposed in the frontend.

### 📩 Contact System

Visitors can submit:

* Name
* Email
* Subject
* Message

When a message is submitted:

1. The backend validates the information.
2. The message is saved in MySQL.
3. An email notification is sent to the portfolio owner.
4. The frontend receives a success response.

### 🔐 Admin System

The project includes an administrator system for managing submitted contact messages.

Features include:

* Admin login
* Password verification
* JWT authentication
* Protected admin functionality
* Viewing submitted messages
* Message management interface

### 🗄️ Database

The backend uses **MySQL** to store portfolio contact messages and administrator information.

## 🛠️ Technologies

### Frontend

* HTML5
* CSS3
* JavaScript
* React
* Vite

### Backend

* Node.js
* Express.js
* REST API
* JWT
* bcrypt
* Nodemailer

### Database

* MySQL

### AI

* Google Gemini API

### Development Tools

* Visual Studio Code
* Git
* GitHub
* npm
* Postman

## 📁 Project Structure

```text
amanya-portfolio/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── sections/
│   ├── App.jsx
│   ├── App.css
│   └── index.css
│
├── portfolio-backend/
│   ├── config/
│   │   ├── database.js
│   │   └── email.js
│   │
│   ├── middleware/
│   │
│   ├── routes/
│   │   ├── admin.js
│   │   ├── ai.js
│   │   └── contact.js
│   │
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

## ⚙️ Running the Project Locally

### 1. Clone the repository

```bash
git clone https://github.com/amanya157/amanya-portfolio.git
```

### 2. Install frontend dependencies

From the project root:

```bash
npm install
```

### 3. Install backend dependencies

```bash
cd portfolio-backend
npm install
```

### 4. Configure environment variables

Create a `.env` file inside:

```text
portfolio-backend/.env
```

Add the required environment variables for:

* Server port
* MySQL database
* Gemini API
* JWT authentication
* Email notifications

**Never commit the `.env` file to GitHub.**

### 5. Start the backend

From:

```text
portfolio-backend/
```

run:

```bash
npm run dev
```

The backend runs locally on:

```text
http://localhost:7001
```

### 6. Start the frontend

From the main project directory:

```bash
npm run dev
```

The Vite development server runs locally on:

```text
http://localhost:5173
```

## 🔒 Security

Sensitive credentials are stored in environment variables rather than directly inside the source code.

The following files and folders are excluded from Git:

```text
.env
node_modules/
dist/
```

This prevents database credentials, API keys, email credentials, and authentication secrets from being uploaded to GitHub.

## 📡 API

The backend provides several API routes.

### Contact

```text
POST /api/contact
```

Submit a new contact message.

```text
GET /api/contact
```

Retrieve submitted contact messages.

### AI

```text
POST /api/ai
```

Send a question to the portfolio AI assistant.

### Admin

```text
POST /api/admin/login
```

Authenticate an administrator and receive a JWT token.

## 🎯 Project Goals

The goal of this project is to create a professional online presence while demonstrating practical full-stack development skills.

The project combines:

* Frontend development
* Backend development
* REST APIs
* Database management
* Authentication
* Email integration
* AI integration
* Responsive web design

## 👨‍💻 About

**Amanya Godfrey**

Full Stack Developer focused on building modern, responsive, and functional web applications.

### Training

* KLAB Institute — Frontend Development
* CodeBridge Academy — JavaScript

## 📌 Status

**Currently being prepared for production deployment.**

The development version is fully functional, including the frontend, backend, database integration, contact email notifications, AI assistant, and admin functionality.

## 📄 License

This project is a personal portfolio project created by **Amanya Godfrey**.
