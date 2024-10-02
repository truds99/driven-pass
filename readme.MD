# drivenpass-backend

 backend project for a password manager implemented in TypeScript that allows users to securely store, manage, and encrypt their credentials. This project includes CRUD functionality for passwords, user authentication, and account deletion.

- **Password CRUD**: Allows users to create, read, update, and delete stored passwords.
- **Login and Authentication**: Users can register and log in using their credentials.
- **Password Encryption**: Passwords are encrypted before being stored in the database to ensure security.
- **Account Deletion**: Users can delete their accounts along with all associated credentials.
- **Prisma ORM**: Utilizes Prisma as an ORM to interact with the database

## Deployment
https://driven-pass-5mxk.onrender.com

## Technologies
The following tools and frameworks were used in the construction of the project:<br>
<p>
    
<p>
    <img style='margin: 5px;' src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" height="40" alt="Node.js logo" />
    <img style='margin: 5px;' src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" height="40" alt="Express logo" />
    <img style='margin: 5px;' src="https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white" height="40" alt="Prisma logo" />
    <img style='margin: 5px;' src="https://img.shields.io/badge/Bcrypt-EFCA35?style=for-the-badge&logo=bcrypt&logoColor=black" height="40" alt="Bcrypt logo" />
    <img style='margin: 5px;' src="https://img.shields.io/badge/Cryptr-4D9EF5?style=for-the-badge&logo=react&logoColor=white" height="40" alt="Cryptr logo" />
    <img style='margin: 5px;' src="https://img.shields.io/badge/Joi-336699?style=for-the-badge&logo=auth0&logoColor=white" height="40" alt="Joi logo" />
    <img style='margin: 5px;' src="https://img.shields.io/badge/Cors-FF6F91?style=for-the-badge&logo=cors&logoColor=white" height="40" alt="Cors logo" />
    <img style='margin: 5px;' src="https://img.shields.io/badge/JSON_Web_Tokens-000000?style=for-the-badge&logo=json-web-tokens&logoColor=white" height="40" alt="JSON Web Tokens logo" />
    <img style='margin: 5px;' src="https://img.shields.io/badge/HTTP_Status-5D5D5D?style=for-the-badge&logo=http-status&logoColor=white" height="40" alt="HTTP Status logo" />
    <img style='margin: 5px;' src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" height="40" alt="TypeScript logo" />
</p>

## Getting Started

Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A relational database (such as PostgreSQL, MySQL, etc.)

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/truds99/driven-pass.git
cd driven-pass
```

### 2. Install Project Dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a .env file in the root directory and add your MongoDB URI, server port, and JWT secret.

```bash
DATABASE_URL=your_database_url
PORT=your_port_number
JWT_SECRET=your_JWT_secret
```

### 4. Compile Typescript Code

```bash
npm run build
```

### 5. Start the server

```bash
npm start
```
Alternatively, if you are actively developing and want to use TypeScript directly without building it manually each time, you can use:

```bash
npm run dev
```

## Usage
Use tools like Postman or cURL to interact with the API endpoints. Make sure your PostgreSQL instance is running and accessible.

## Contributions
Contributions are welcome! Please fork the repository and submit a pull request for any improvements or new features.