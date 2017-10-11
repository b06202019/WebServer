const http = require('http');
// 建立server
var server = http.createServer(function(req,res){
    var resHeader = {
        'Accept-Charset': 'utf-8',
        'Accept-Language':'zh-TW',
        'charset':'utf-8'
    }
    res.writeHead(200, {'Content-Type':'text/html;charset=utf8'})
    res.write('<h1>hello</h1>','utf8');
    res.write('<p>這是由node.js建立的webserver</p>','utf8');
    res.end();
});
//將server開啟port1234
server.listen(1234)
console.log('Server running at http://127.0.0.1:1234');