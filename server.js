const express = require('express');
const cors = require('cors')
const axios = require('axios');
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.json())
app.use(cors())

let data = {};
function loadData() {
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

  app.get('/auth', (req, res) => {
    const { documentId, password } = req.body; 
    axios.get('../mocks/auth.json')
    .then((response) => {
      console.log(documentId)
        console.log(password)
        res.send("response");
      })
      .catch(function (error) {
        return error;
      })
  });
app.listen(8000, () => {
    loadData();
    console.log('app corriendo en el puerto 8000')
})