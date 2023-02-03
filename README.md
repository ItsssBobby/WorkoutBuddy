# WorkoutBuddy

## Description
The workoutBuddy App allows you to create a customer profile with your workout preferences ( i.e. cardio,  olympic_weightlifting, plyometrics) and recommend workouts to accomplish in one session. Aditionally, you can also post your comments about the workout into a blog so you can receive support and challenge from other users

There are three endpoints for you to return data from the workoutBuddy app

| Request | Endpoint | Description | 
| ------------- | ------------- | ------------- |
| `GET` | /api/***workoutPref***  | Sends a GET request to return all the instances of each ***workoutPref*** ( products/categories/tags) |
| `GET` | /api/***user***/***id*** | Sends a GET request to return specific ***user*** data filtered by the id |
| `POST` | /api/***post*** | Sends a POST request to create a new entry for the ***post*** |

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Prerequisites
* Since this is a node.js app, you will need to install node.js in your laptop.  
    * Download the latest version of node.js here --> https://nodejs.org/en/download/  
* After node.js has been installed on your machine, you will need to install npm.  
    * Follow the steps in the following website to install npm --> https://docs.npmjs.com/cli/v9/commands/npm-install?v=true  
* You will also need to have installed mySQL. 
    * Follow the steps in the following website to install npm --> https://www.mysql.com/


## Installation
* Download the repo
* Navigate to the `internetRetail` folder
* Install the prerequesites by running:
        
        npm i 
* Open `mysql` by running the following command: 

        mysql -u root -p
* Once inside of mysql, run the following command to create the squema
        
        source schema.sql
* Exit out of mysql by running

        exit 


### Create your model and seed it
* Install the prereques by running:

        npm run seed
* Start your server by running:

        `nodemon server.js`