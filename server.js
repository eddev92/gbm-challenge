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
    .then(function (response) {
        console.log(response.data)
        data = response.data;
        return data;
      })
      .catch(function (error) {
        return error;
      })
}
app.get('/getData', function(req, res){
    res.send(data);
  });

app.listen(8000, () => {
    loadData();
    console.log('app corriendo en el puerto 8000')
})