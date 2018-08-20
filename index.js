var express = require('express')
var app = expres()

app.set('port', (process.env.PORT || 5000))
app.use(expres.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Fiap 2TINA')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
