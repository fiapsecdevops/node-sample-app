var express = require('express')
var app = express()
var port = 5000

app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello world')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:5000)
}
