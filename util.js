/**
 * Created by Administrator on 2017/6/7.
 */
var fs = require("fs");
process.stdout.write("hello")
console.log(process.cwd())
//fs.watchFile(__dirname + '/demo.txt', {interval: 20}, function (curr, prev) {
//  if(Date.parse(prev.ctime) == 0) {
//    console.log('文件被创建!');
//  } else if(Date.parse(curr.ctime) == 0) {
//    console.log('文件被删除!')
//  } else if(Date.parse(curr.mtime) != Date.parse(prev.mtime)) {
//    console.log('文件有修改');
//  }
//});
//fs.watchFile(__dirname + '/demo.txt', function (curr, prev) {
//  console.log('这是第二个watch,监视到文件有修改');
//});
console.log(__dirname);
var fsWatcher = fs.watch(__dirname, function (event, filename) {
  console.log(event)
});

//console.log(fsWatcher instanceof FSWatcher);

fsWatcher.on('change', function (event, filename) {
  console.log(filename + ' 发生变化')
});

////30秒后关闭监视
//setTimeout(function () {
//  console.log('关闭')
//  fsWatcher.close(function (err) {
//    if(err) {
//      console.error(err)
//    }
//    console.log('关闭watch')
//  });
//}, 30000);
