var express = require('express');
var app = express();
var fs = require("fs");
app.get('/', function (req, res) {
  fs.readFile( __dirname + "/" + "node.html", 'utf8', function (err, data) {
    res.send( data );
  });
})
app.get('/listUsers', function (req, res) {
  fs.readFile( __dirname + "/user.json", {encoding: 'utf8'}, function (err, data) {
    var data = JSON.parse(data),
        query = req.query, data2;
    for(var i in data){
      var id1 = (data[i].id);
      var id2 = (query["id"]);
      if(id1 == id2){
        data2 = data[i]
      }
    }

    fs.open(__dirname + '/demo.txt', 'a', function (err, fd) {
      if(err) {
        console.error(err);
        return;
      } else {
        var buffer = new Buffer('写入文件数据内容');
        //写入'入文件'三个字
        fs.write(fd, buffer, 3, 9, 12, function (err, written, buffer) {
          if(err) {
            console.log('写入文件失败');
            console.error(err);
            return;
          } else {
            console.log(buffer.toString());
            //写入'数据内'三个字
            fs.write(fd, buffer, 12, 9, null, function (err, written, buffer) {
              console.log(buffer.toString());
              fs.fsync(fd);
              fs.close(fd);
            })
            fs.appendFile(__dirname + "/demo.txt", '\n使用fs.appendFile追加文件内容\n', function () {
              console.log('追加内容完成');
            });
          }
        });
      }
    });

    res.send(data2);
  });
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})