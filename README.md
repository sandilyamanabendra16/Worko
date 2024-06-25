Overview
The Worko API is a backend service built with Node.js and Express.js, designed to help job seekers request referrals and additional services like resume review, interview handholding, career guidance, and mock interviews. The project follows the MVC architecture and includes basic authentication for all API endpoints.

Features
CRUD Operations: Create, Read, Update, Delete users.
Basic Authentication: Secures all API endpoints.
Input Validation: Ensures data integrity.
Soft Delete: Marks users as deleted without physically removing the data.

Prerequisites
Ensure you have the following installed:

Node.js (version 14.x or higher)
MongoDB (local instance or MongoDB Atlas)

Packages used:
1) express: A minimal and flexible Node.js web application framework.
3) body-parser (to user req.body parameter)
4) cors(Cross origin resourse sharing)
5) dotenv (to use environment variables)
6) mongoose (to create mongoose schema/model and connect to mongo DB database)

Development Dependencies
nodemon: A tool that helps develop Node.js-based applications by automatically restarting the node application when file changes are detected.

Getting Started
1. Clone the Repository
git clone <repository_url>
cd worko-api
2. Install Dependencies
npm install
3. Environment Configuration
Create a .env file in the root directory of the project and add the following configuration:
PORT=5000
MONGO_URI=your_mongo_connection_string_here
AUTH_USERNAME=your_username
AUTH_PASSWORD=your_password
Replace your_mongo_connection_string_here with your actual MongoDB connection string. If you are using MongoDB Atlas, it will look something like this:
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/mydatabase?retryWrites=true&w=majority
4. Start the Server
nodemon index.js
This will start the server on the port defined in your .env file (default is 5000). You should see a message indicating that the server is running and connected to MongoDB.

API Endpoints

Examplie of api: http://localhost:5000

1) List All Users
Endpoint: GET /api/worko/user
Description: Retrieves a list of all users.

2) Get User Details
Endpoint: GET /api/worko/user/:userId
Description: Retrieves the details of a specific user by their ID.

3) Create a New User
Endpoint: POST /api/worko/user
Description: Creates a new user.

4) Update an Existing User
Endpoint: PUT /api/worko/user/:userId
Description: Updates an existing user (replaces the user data).

5) Partially Update a User
Endpoint: PATCH /api/worko/user/:userId
Description: Updates specific fields of an existing user.

6) Soft Delete a User
Endpoint: DELETE /api/worko/user/:userId
Description: Marks a user as deleted without physically removing the data.

Example .env File
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/mydatabase?retryWrites=true&w=majority
AUTH_USERNAME=your_username
AUTH_PASSWORD=your_password

