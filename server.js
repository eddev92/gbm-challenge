const express = require('express');
const cors = require('cors')
const axios = require('axios');
const fs = require('fs');
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.json())
app.use(cors())

let data = {};
let users = [];
let tokens = [];
let auth = [];

// loadData for App

function getUsers() {
  fs.readFile('./mocks/users.json', 'utf8', (err, data) => {
    if (err) return console.log('err', err);
    users = JSON.parse(data);
    console.log(users)
    return users;
    });
}

function getTokens() {
  fs.readFile('./mocks/tokens.json', 'utf8', (err, data) => {
    if (err) return console.log('err', err);
    tokens = JSON.parse(data);
    console.log(tokens)
    return tokens;
    });
}

function authenticationUser() {
  fs.readFile('./mocks/auth.json', 'utf8', (err, data) => {
    if (err) return console.log('err', err);
    auth = JSON.parse(data);
    console.log(auth)
    return auth;
    });
}

function loadGbmService() {
    axios.get('https://www.gbm.com.mx/Mercados/ObtenerDatosGrafico?empresa=IPC')
    .then((response) => {
        console.log(response.data)
        data = response.data;
        return data;
      })
      .catch((error) => {
        return error;
      })
}

app.get('/getData', (req, res) => {
    res.send(data);
  });

app.post('/auth', (req, res) => {
  res.send(users);
});
app.get('/token', (req, res) => {
  res.send(users);
});
app.get('/user', (req, res) => {
  res.send(users);
});
app.listen(8000, () => {
    loadGbmService()
    getTokens();
    authenticationUser();
    getUsers();
    console.log('app corriendo en el puerto 8000')
})