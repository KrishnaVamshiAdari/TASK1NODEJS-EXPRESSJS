# MyApp

A simple Node.js/Express To-Do application with authentication and MongoDB.

## Features

- User registration and login (JWT-based authentication)
- Add, update, delete, and list personal to-dos
- Secure routes for authenticated users
- EJS templating for views
- RESTful API endpoints

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [MongoDB](https://www.mongodb.com/) running locally or in the cloud

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/your-repo-name.git
   cd myapp
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the root directory and add:
   ```env
   ACCESS_TOKEN_SECRET=your_access_secret
   REFRESH_TOKEN_SECRET=your_refresh_secret
   ACCESS_TOKEN_EXPIRY=1h
   REFRESH_TOKEN_EXPIRY=7d
   ```
4. Start MongoDB if running locally.

### Running the App

- Start the server:
  ```sh
  npm start
  ```
- Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Development Mode (with auto-reload)

- Install nodemon (if not already):
  ```sh
  npm install --save-dev nodemon
  ```
- Add to `package.json` scripts:
  ```json
  "dev": "nodemon ./bin/www"
  ```
- Run:
  ```sh
  npm run dev
  ```

## Folder Structure

- `models/` - Mongoose schemas for User and Todo
- `controllers/` - Route logic for authentication and todos
- `routes/` - Express route definitions
- `middleware/` - Custom middleware (auth, validation)
- `views/` - EJS templates
- `public/` - Static assets (CSS, JS, images)

## License

MIT
