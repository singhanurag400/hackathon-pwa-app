var fallback = require('express-history-api-fallback')
var express = require('express')
var app = express()
//  path=require('path')
const cors = require('cors');
// var root = __dirname + '/dist/pwa-spa'
// app.use(express.static(root))
// app.use(fallback('index.html', { root: root }));


// app.use(express.static(path.join(__dirname,"/dist/pwa-spa")));

var path = __dirname + '/dist/pwa-spa/';


app.use(express.static(path));
app.get('*', function(req, res) {
    res.sendFile(path + '/index.html');
});
app.use(cors()); 

app.set('port',(process.env.PORT||1527));
app.listen(app.get('port'),()=>console.log('Server 🌎 running on ' + app.get('port')));