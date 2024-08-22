# Notes Application

## Description

The Notes Application is a platform where users can register and log in to manage their notes. Users can create custom categories for their notes, add, archive, unarchive, and delete notes. The application allows users to organize their notes efficiently and navigate between archived and active notes.

## Prerequisites

Before running the application, ensure that you have the following installed on your system:

- **[Node.js](https://nodejs.org/)**: Version 18.x (or compatible version)
- **[npm](https://www.npmjs.com/)**: Version 9.x (or compatible version)
- **[PostgreSQL](https://www.postgresql.org/)**: Version 14.x (or compatible version)
- **[psql](https://www.postgresql.org/docs/current/app-psql.html)**: PostgreSQL command-line tool for managing databases

## Project Structure

The project consists of two main parts:

1. **Frontend**: Built with React, Vite, and TailwindCSS.
2. **Backend**: Built with Express, Sequelize, and PostgreSQL.

## Frontend Requirements

### Dependencies

- **React**: `^18.3.1`
- **React DOM**: `^18.3.1`
- **Redux Toolkit**: `^2.2.7`
- **TinyMCE React**: `^5.1.1`
- **Axios**: `^1.7.4`
- **PostCSS**: `^8.4.41`
- **Autoprefixer**: `^10.4.20`
- **React Router DOM**: `^6.26.1`
- **Serve**: `^15.0.0`

#### Development Dependencies

- **Vite**: `^5.4.1`
- **ESLint**: `^9.9.0`
- **TailwindCSS**: `^3.4.10`
- **ESLint Plugins**: `^7.35.0` for React

### Engines

- **Node.js**: Version 18.x (or compatible version)
- **Vite**: Version 5.x (build tool and development server)
- **React**: Version 18.x (UI library)
- **TailwindCSS**: Version 3.x (CSS framework for styling)
- **Babel**: Used indirectly through dependencies for JavaScript transpilation

## Backend Requirements

### Dependencies

- **Express**: `^4.19.2`
- **Sequelize**: `^6.37.3`
- **PostgreSQL Client**: `^8.12.0`
- **Bcrypt**: `^5.1.1`
- **JSON Web Token**: `^9.0.2`
- **Morgan**: `^1.10.0`
- **Dotenv**: `^16.4.5`
- **CORS**: `^2.8.5`

#### Development Dependencies

- **Babel CLI**: `^7.24.8`
- **Babel Core**: `^7.25.2`
- **Nodemon**: `^3.1.4`

### Engines

- **Node.js**: Version 18.x (or compatible version)
- **Babel**: Version 7.x (JavaScript compiler to convert modern JavaScript into compatible versions)
- **Nodemon**: Version 3.x (development tool for auto-reloading the server)
- **PostgreSQL**: Version 13.x or higher (database engine)
- **Sequelize**: Version 6.x (ORM for PostgreSQL)
- **Express**: Version 4.x (web framework for Node.js)
- **Bcrypt**: Version 5.x (library for hashing passwords)
- **jsonwebtoken**: Version 9.x (library for creating and verifying JSON web tokens)

## Installation and Setup

To set up and run the application, you can use the provided setup script. Follow these steps:

1. **Ensure the setup script has execution permissions:**

   ```bash
   chmod +x setup-and-run.sh

2. **Run the setup script**

    ```bash
    ./setup-and-run.sh

The script will:

- Prompt for your PostgreSQL database password.
- Install dependencies for both the backend and frontend.
- Create and configure the PostgreSQL database.
- Generate a `.env` file with configuration settings for the backend.
- Start the backend and frontend servers.
