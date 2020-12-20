var express = require('express')
var cors = require('cors')
var app = express()

const app() = express();

app.use(cors())

app.use(express.static(__dirname + '/dist/JavaStudentProject'));

app.get('/*', function(req,res) {

  res.sendFile(path.join(__dirname+'/dist/JavaStudentProject/index.html'));
});

app.listen(process.env.PORT || 8080);
