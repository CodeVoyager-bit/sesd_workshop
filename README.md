# Library Management System

A full-fledged CRUD application for managing a library system, built with Node.js, Express, TypeScript, and MongoDB.
This project implements Object-Oriented Programming (OOP) principles with a layered architecture: **Controllers → Services → Repositories**.

## Features

- **Books Management**: Create, Read (List + Detail), Update, Delete (CRUD)
- **Search**: Search books by title/author/genre.
- **Authentication**: User registration and login with JWT.
- **Authorization**: Role-based access control (Admin vs. Member).
- **Validation**: Strict input validation using Mongoose schemas.
- **Architecture**: Clean OOP structure with manual dependency handling.

## Tech Stack

- **Runtime**: Node.js
- **Language**: TypeScript
- **Framework**: Express.js
- **Database**: MongoDB (with Mongoose ODM)
- **Auth**: JWT & Bcrypt

## Project Structure

```
src/
├── controllers/  # Handle HTTP requests and responses
├── services/     # Business logic layer
├── repositories/ # Database access layer
├── models/       # Mongoose schemas and interfaces
├── routes/       # API route definitions
├── middlewares/  # Express middlewares (Auth, Error)
├── utils/        # Utility functions and interfaces
├── app.ts        # Express app setup
└── server.ts     # Entry point
```

## Setup & Run

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Environment Variables**:
    A `.env` file is created with default values:
    ```
    PORT=3000
    MONGO_URI=mongodb://localhost:27017/library_system
    JWT_SECRET=supersecretkey_library_ops
    ```

3.  **Start Server**:
    - **Development**:
      ```bash
      npm run dev
      ```
    - **Production Build**:
      ```bash
      npm run build
      npm start
      ```

## API Endpoints

### Auth
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login and get JWT

### Books
- `GET /api/books` - Get all books (supports `?search=term`)
- `GET /api/books/:id` - Get book details
- `POST /api/books` - Create a book (Admin only, requires Header `Authorization: Bearer <token>`)
- `PUT /api/books/:id` - Update a book (Admin only)
- `DELETE /api/books/:id` - Delete a book (Admin only)

