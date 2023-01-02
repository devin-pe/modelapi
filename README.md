# ModelAPI

This API allows users to store and retrieve machine learning model files. All API endpoints are protected by user authorization functionality. In regards to authorization, users may register, login and view their account. The main role of the API is to allow users to get, set and delete HDF5 files (used to store scientific data for things such as NNs). 

## Getting Started

To get started with this API, you will need to set up a development environment and install the necessary dependencies.

### Prerequisites

- NPM

1. Installing

Install the required packages via NPM:

```
$ npm install 
```


2. Environment Variables

Set up the necessary environment variables. In the .env file change:

```
MONGO_URI = mongodb+srv://YOUR-CLUSTER-URL
JWT_SECRET = YOURTOKEN
```

## Run

Run the development server:
```
npm start
```

The API will be available at http://localhost:8000 by default. It can be changed in the .env file.


## API Endpoints

GET / : Template route for adding a homepage

1. User Authorization: 

POST /register: Register a new account with the API.

POST /login: Log in to the API with a username and password.

GET /profile: Gets the user's credentials



2. Retrieving and Storing Models (protected):

POST /<id>: Upload a new machine learning model file.

GET /<id>: Retrieve a machine learning model file by its ID.

DELETE /<id>: Delete a machine learning model file by its ID.

## Built With
NodeJS & Express - Web frameworks
JWT and bcrypt - Generate and Encrypt tokens
Mongoose - MongoDB API


