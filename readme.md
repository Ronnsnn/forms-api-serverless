# README

### Description

Basic form crud api with serverless and mongodb (practice):


### Instalation

- ``npm install``
- ``npm start``      (local)
- ``npm run deploy`` (deploy to AWS using serverless-admin profile)

Note: Require env variable DB_CONN (MongoDB connection string)


### Routes

- GET     /forms
- POST    /forms
- GET     /forms/{path}
- POST    /forms/{path}
- PUT     /forms/{path}
- DELETE  /forms/{path}