const connect = require('connect'); // npm에서 다운받음 (fs, connect, serve-staitc...)
const serveStatic = require('serve-static');

const port = 8080;
const app = connect();

app.use(serveStatic(__dirname + "/public"));

app.listen(port, function(){
    console.log(`http server running on ${port}`);
});