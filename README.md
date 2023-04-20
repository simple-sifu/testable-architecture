# tutorial-nodejs

# Header

- content
- cookies
- auth

# Setup

- npm init -y
- npm install --D nodemon

# linting code

- npm init @eslint/config


- Get eslint plugin, add this code to your settings.json
```
 {
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  },
  "eslint.validate": ["javascript"]
 }
 ```

# Postman is a headless browser we can use to test
- collections are stored in server/postman dir

# HTTP Codes

## 2.xx Success

- 200 - Success
- 201 - Created, new insert in db.
- 204 - No content, delete request and return nothing.

## 3.xx Redirection - something is moved

- 304 - not modified - Get request but nothing is changed on server

## 4.xx Client Error - clients fault

- 400 - Bad Request - submitted a form with bad email. Did not give what was needed to be successful
- 401 - Unauthorized - no access, trying to access something, that requires a login authentication
- 404 - Not Found - not there

## 5.xx Server Error

- 500 - Internal Server Error

## Restful API Standards

- GET /todos (Get all)
- GET /todos/1 (Get a todo with id=1)
- POST /todos (Add a todo)
- PUT /todos/1 (Update todo with id=1)
- DELETE /todos/1 (Delete todo with id=1)
# testable-architecture
