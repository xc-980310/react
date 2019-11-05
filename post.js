let http = require('http');
http.createServer(function (req,res) {
    res.writeHead(200,{'content-type':'text/html:charset=utf-8'});
    let allData='';
    req.on('data',function (chunk) {
        console.log(chunk);
        allData +=chunk;
    });
    req.on('end',function () {
        let obj =JSON.parse(allData);
        if (obj.user==='wxc'&&obj.pass ==='1231'){
            res.end('1');
        }else {
            res.end('-1');
        }
    });

}).listen(3000,()=>{
    console.log('成功启动')
});