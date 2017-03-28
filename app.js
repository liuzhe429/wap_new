let http = require("http");
let path = require("path");
let express = require('express');
let ejs = require("ejs");
let index = require("./routes/index.js");
let account = require("./routes/account.js");
const app = express();


app.use(express.static(path.resolve('public')));
app.use(express.static(path.join(__dirname,'node_modules')));
//设置模板的存放目录
app.set('views',path.resolve('views'));
//设置模板引擎
app.set('view engine', 'html');
//设置模板渲染方法
app.engine('html',ejs.__express);
const server = http.createServer(app);

// app.use(app.router);
// index.initialize(app);
app.use('/',index);
app.use('/account',account);

server.listen(3003);
server.on('listening', () => {
    console.log('Listening on 3003');
});