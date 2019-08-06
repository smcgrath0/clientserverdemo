
const express = require('express');

const cors = require('cors');
const mysql = require('mysql');
const creds = require('./mysqlcredentials.js')
const connection = mysql.createConnection(creds);
//server is an object that is returned when calling the express function
const server = express();

server.use(cors());

const names = [{
  "name": "steven"
}, {
  "name": "kiddo"
}]

const grades = [
  {
    "grade": "87"
  },
  {
    "grade": "92"
  }
]


server.get('/grade', handleGradeToClient);

function handleGradeToClient (request, response){

  response.send(grades)
}

server.get('/name', handleNameToClient);

function handleNameToClient(request, response) {
  response.send(names)
}


server.listen( 3005, () => console.log('server has started'))
