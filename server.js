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
let user = {};
let userInfo = {};
let tokens = [];
let auth = [];

// find User
function findUserWithToken(userName, password, data) {
  let obj;
  // retorna token y userName
  data.find(usr => {
   if (usr.userName === userName && usr.password === password) {
      obj = { userName, token: usr.token };
    } 
  })
  return obj;
};

function findUser(userName, data) {
  let user;
  // retorna user info
  data.length > 0 && data.find(usr => {
   if (usr.userName === userName) {
      user = usr;
    } 
  })
  return user;
};

// loadData for App

function getUsers(userName, res) {
  fs.readFile('./mocks/users.json', 'utf8', (err, data) => {
    if (err) return console.log('err', err);
    console.log('userName getUser', userName)
    const aux = JSON.parse(data);
    console.log('data getUser', aux)
    userInfo = findUser(userName, aux);
    console.log('userInfo', userInfo)
      if (!userInfo) {
        return res.send({status: 404, message: 'user not found'})
      } else {
        res.send(userInfo);
      }
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

function authenticationUser(userName, password, res) {
  fs.readFile('./mocks/auth.json', 'utf8', (err, data) => {
    if (err) return console.log('err', err);
    auth = JSON.parse(data);
    console.log('auth', auth)
    user = findUserWithToken(userName, password, auth)
    console.log('user found', user)
      if (!user) {
        return res.send({status: 404, message: 'user not found'})
      } else {
        res.send(user);
      }
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
  console.log('req.body', req.body)
  const { userName, password } = req.body
  // authenticationUser(userName, password);
  authenticationUser(userName, password, res);
});
app.get('/token', (req, res) => {
  res.send(users);
});
app.post('/user', (req, res) => {
  console.log('req.body', req.body)
  const { userName, token } = req.body;
  getUsers(userName, res);
});
app.listen(8000, () => {
    loadGbmService()
    getTokens();
    // authenticationUser();
    // getUsers();
    console.log('app corriendo en el puerto 8000')
})