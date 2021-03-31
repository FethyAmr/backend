var express = require('express')
var app = express()

app.listen(8000, () => {
  console.log("Serveur à l'écoute")
})

app.get('/', (req, res) => {
  res.send("Authors API");
});

app.get('/author/:id', (req, res) => {
  res.send(`author ${req.params.id} `);

if(req.params.id == 1 ){
  "Lawrence Nowell, UK"
}



});



