### BlogApp

<p> BlogApp is a blog application built with NodeJs. It allow user to create and view blog posts. The application also include user authentication.

## Table of Contents
- [Features](#Features)
- [Installation](#Installation)
- [Usage](#Usage)
- [Screenshots](#Screenshots)
- [Technologies](#Technologies)
- [Contributing](#Contributing)
- [Contact](#Contact)

## Features
- User authentication (signup, login)
- Create, view post

## Installation
1. **Clone the repository**
``` git clone https://github.com/techydeola/BlogApp ```
``` cd BlogApp ```
2. **Install dependencies**
``` npm install ```
3. **Set up the enviroment variables**
- create a `.env` file in the root directory and add the following:
``` MONGO_USERNAME=your_cluster_username ```
``` MONGO_PASSWORD=your_cluster_password ```
``` MONGO_HOST=host ```
``` MONGO_DB=database_name ```
4. **Run the development server**
``` npm start ```
5. **Open your browser**
- Go to `http://localhost:3000`

## Usage
1. Register an account:
- Go to the registration page and create a new account.
2. Create a new post
- Navigate to the "Create Post" page and write your content.

## Screenshots
![Signup Page](https://ibb.co/tzskSJC)
![Blog Page](https://ibb.co/8xTYSsR)

## Technologies
- Frontend: Ejs
- Backend: NodeJs, Express
- Database: Mongo
- Authentication: JWT
- Styling: CSS

## Contributing
- Fork the repository.
- Create a new branch (`git checkout -b feature/your-feature`).
- Make your changes.
- Commit your changes (`git commit -m "Add some feature"`).
- Push to the branch (`git push origin feature/your-feature`).
- Open a pull request.

## Contact
Created by [Johnson Adeola] - [johnsamxy@gmail.com] - feel free to contact me!
