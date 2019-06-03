# ToDo List App Overview
This app allows users to add tasks using react/redux and saves the data to backend mongodb. There are two endpoints, one for front end and another for backend api. The todo app is built in a node:8 docker image and pushed to kubernetes cluster cloud. An automation script was created to push container to the sore and provision it to the cluster.

The app project contains automated testing and documentation in /doc folder. The front end uses responsive bootstrap design.

<img src="https://raw.githubusercontent.com/monuchacko/todolist/master/assets/images/todolist.png" alt="ToDo List" />


## How to run
Clone the image from the github repository and perform the following task:

> npm install

To run the app execute the command below:

> npm start

To build the app execute the following command below:

> npm run build

## Tesing

All components have their own test scripts. They can be executed using the command below:

> npm run test

## Documentation

All source codes are commented to enable document generation. Documentation for the objects can be found in the /docs folder in this project. Following command can be executed to generate fresh set of documents.

> npm run start-docs

## Deploy docker image to Kubernetes cloud cluster

The deployment process is automated. To deploy run the following command in a powershell terminal. This script will create a docker image from the base node:8 image and will push it to the cloud container registery and the cluster.

> .\deployapp.ps1

