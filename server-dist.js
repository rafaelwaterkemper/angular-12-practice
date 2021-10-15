var http = require('http')
var { readFileSync } = require('fs')

http.createServer(function (req, res) {

    if (req.url === '/') {
        page = readFileSync("./dist/practice-angular/index.html")
    } else if (req.url === '/favicon.ico') {
        res.writeHead(404, "not found")
        res.end()
        return
    } else {
        page = readFileSync("./dist/practice-angular" + req.url)
    }
    res.write(page);
    res.end();
}).listen(8080);