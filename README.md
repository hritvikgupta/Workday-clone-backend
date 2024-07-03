# Workday React App

This project was bootstrapped with [Link to application demo](https://hritvikgupta.github.io/workday-clone-frontend/)

## About the project

This is the project which is a clone of myworkday application for submiting and profile for the job application. In the Front ened this application is made using React and Tailwind. And the Backend is developed with Node.js And Express.js. It contains all the production level feature. Where it utilizes JWT for Statefull application and CI Pipeline with github actions for building and deploying the code. Front end is hosted on github pages and backend is hosted on render. 

# Workday Clone Backend

This repository contains the backend code for the Workday Clone application. The backend is built with Node.js and Express.js, utilizing MongoDB for database management. It provides APIs for user authentication, job applications, and profile management.

## Table of Contents

- [File Structure](#file-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [APIs](#apis)
- [Tests](#tests)
- [CI/CD](#CI/CD)

## File Structure

* Front-end Repo : https://github.com/hritvikgupta/workday-clone-frontend

```bash
Frontend
├── components
│ ├── ApplicationPage.jsx # Component for displaying submitted applications
│ ├── Card.jsx # Reusable card component
│ ├── Header.jsx # Header component
│ ├── loginPage.jsx # Login page component
│ ├── resumeUploadPage.jsx # Resume upload page component
│ └── signUpPage.jsx # Sign-up page component
├── App.css # Main CSS file for styling the app
├── App.js # Main App component
├── App.test.js # Test file for App component
├── index.css # CSS file for index.html
├── index.js # Entry point for React application
├── logo.svg # Logo image file
├── reportWebVitals.js # Performance reporting for the app
├── setupTests.js # Setup file for running tests
├── .gitignore # Git ignore file
├── package-lock.json # Lock file for npm
├── package.json # Project dependencies and scripts
└── README.md # Project documentation
```
  
```bash
Backend 
├── .github
│ └── workflows
│ └── main.yml # GitHub Actions CI/CD pipeline configuration
├── controller
│ └── crud.js # Controller for handling CRUD operations
├── db
│ └── connect.js # Database connection setup
├── middleware
│ └── auth.js # Authentication middleware
├── models
│ ├── applicationSchema.js # Schema for application data
│ ├── personalDetailsSchema.js # Schema for personal details
│ └── schema.js # User schema
├── routes
│ ├── applicationsRoute.js # Route for application-related endpoints
│ ├── personalInfoSchema.js # Route for personal info-related endpoints
│ ├── route.js # Main routes for authentication and user management
│ └── staticRoute.js # Static routes (if any)
├── service
│ └── auth.js # Service functions for authentication
├── src
│ └── app.test.js # Test file for backend endpoints
├── .gitignore # Git ignore file
├── app.js # Main application file
├── package-lock.json # Lock file for npm
├── package.json # Project dependencies and scripts
└── server.js # Server setup and starting point
```

The page will reload when you make changes.\
You may also see any lint errors in the console.


# Getting-started

To get a local copy up and running follow these simple steps.

### Prerequisites

* Node.js (>= 14.x)
* MongoDB

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/workday-clone-backend.git
   cd workday-clone-backend
   ```

2. Install NPM packages
   ```bash
   npm install
   ```
3. Create a .env file in the root directory and add the following environment variables:

  ```bash
  MONGO_URI=your_mongodb_uri
  JWT_SECRET=your_jwt_secret
  ```
4. Running the Server
  To start the server, run:
  ```bash
  npm start
  ```

     The server will start running on http://localhost:5001.

# Environment-Variables
   * MONGO_URI: URI for connecting to MongoDB.
   * JWT_SECRET: Secret key for JWT authentication.

# Available-scripts
  * npm start: Starts the server.
  * bnpm test: Runs the test suite.
  * npm run dev: Starts the server with nodemon for development.

# Apis
   * Authentication
      POST /api/signup: Register a new user.
      POST /api/login: Login a user.
   * Personal Info
      GET /resume-uploaded: Fetch personal info.
      POST /resume-uploaded: Submit personal info.
   
   * Applications
      GET /resume-uploaded/applications: Fetch all applications for the logged-in user.
      POST /resume-uploaded/applications: Submit a new application.
   
# Tests
* The project uses Jest for testing. To run tests, use:
```bash
npm test
```

# CI/CD 
   * The project uses GitHub Actions for continuous integration and deployment. The configuration is located in .github/workflows/main.yml.

# Learn More
   * To learn more about Express.js, visit the [Express documentation]([https://expressjs.com/]).
   
   * To learn more about MongoDB, visit the [MongoDB documentation](https://docs.mongodb.com/).
   
   * To learn more about JWT, visit the [JWT documentation]().



This `README.md` provides a comprehensive overview of your backend project, including the file structure, setup instructions, environment variables, available scripts, APIs, and testing information. Adjust any specific URLs, paths, or environment variable details as necessary for your project.
