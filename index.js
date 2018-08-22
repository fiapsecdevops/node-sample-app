var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 1337))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Fiap 2018 TESTE Deploy')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
