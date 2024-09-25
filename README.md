# Body Treatments Berlin - Backend

Welcome to the backend repository for **Body Treatments Berlin**, a personal massage website. This repository handles the server-side logic, APIs, and database interactions for the project.

## Project Overview

The backend of Body Treatments Berlin is designed to provide a robust and secure server environment to support the website's functionality. It handles user authentication, booking management, and other essential server-side operations.

## Features

- User authentication with JWT
- Secure password hashing with bcrypt
- Handling of booking requests and management
- Admin functionality for viewing and managing bookings
- RESTful API endpoints for frontend integration

## Technologies Used

This project leverages modern backend technologies to create a secure and efficient server environment:

- **Server**: Node.js with Express for building scalable and maintainable server applications.
- **Database**: MongoDB with Mongoose for database interactions and schema modeling.
- **Authentication**: JSON Web Tokens (JWT) and bcrypt for secure authentication and password hashing.
- **Middleware**: Body-parser, cookie-parser, cors, and morgan for handling requests, cookies, cross-origin resource sharing, and logging.

## Development Approach

This backend uses best practices for security and efficiency, with a focus on creating a seamless integration with the frontend React application.

## Current Status

- **Completed**:

  - Basic server setup
  - User authentication endpoints
  - Booking management endpoints

- **In Progress**:
  - Enhancements to booking management
  - Admin endpoints for viewing and managing bookings
  - Deployment configurations

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running
- Git installed

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/body-treatments-berlin-backend.git
   cd body-treatments-berlin-backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:

   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```

4. Start the server:

   ```bash
   npm start
   ```

### Dependencies

This project uses the following dependencies:

```json
"dependencies": {
  "bcryptjs": "^2.4.3",
  "body-parser": "^1.20.2",
  "cookie-parser": "^1.4.6",
  "cors": "^2.8.5",
  "dotenv": "^16.4.5",
  "express": "^4.19.2",
  "express-jwt": "^8.4.1",
  "jsonwebtoken": "^9.0.2",
  "mongoose": "^8.4.0",
  "morgan": "^1.10.0"
}
```
