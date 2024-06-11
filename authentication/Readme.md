```markdown
# MERN Authentication App

This is a full-stack web application built with the MERN (MongoDB, Express, React, Node.js) stack, featuring user authentication and authorization using JSON Web Tokens (JWT). The app utilizes cookies to store JWT tokens, and passwords are securely hashed and salted before storage.

The frontend is built with React and TypeScript, utilizing Redux Toolkit Query for efficient data fetching and caching. The UI is styled using React Bootstrap for a responsive and modern design. The app provides user registration, login, logout, and profile update functionality.

## Features

- User registration and login
- Password hashing and salting for secure storage
- JWT-based authentication and authorization
- Cookie-based JWT token storage
- User logout functionality
- User profile update functionality
- TypeScript for enhanced code quality and maintainability
- Redux Toolkit Query for efficient data fetching and caching
- React Bootstrap for responsive UI design

## Prerequisites

- Node.js (v18 or later)
- MongoDB (v8 or later)

## Installation

1. Clone the repository:
```

git clone https://github.com/your-username/mern-auth-app.git

```

2. Navigate to the project directory:
```

cd mern-auth-app

```

3. Install server dependencies:
```

npm install

```

4. Install client dependencies:
```

cd ../client
npm install

```

## Configuration

1. Create a `.env` file in the `server` directory and provide the following environment variables:

```

MONGO_URI=<your-mongodb-uri>
<br />
JWT_SECRET=<your-jwt-secret>

```

2. Optionally, you can configure additional environment variables like `PORT` or `NODE_ENV`.

## Running the Application

1. Start the application concurrently with:

```

npm run dev

```

2. Access the application at `http://localhost:5173` (or the specified client port).

## Technologies Used

- **Frontend**: React, TypeScript, Redux Toolkit Query, React Bootstrap
- **Backend**: Node.js, Express.js, MongoDB, JWT
- **Authentication**: JSON Web Tokens (JWT), Cookie-based storage
- **Password Security**: bcrypt (for password hashing and salting)

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

```
