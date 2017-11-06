///**
// * Created by Administrator on 2017/11/6.
// */
////id = 33;
////function foo(){
////  setTimeout(()=>{
////    console.log("iddddddd: ", this.id);
////}, 100);
////}
////foo.call({id: 12});
//
//
//function hello(){
//  console.log("hello " + this.name);
//}
//function Person(name){
//  this.name = name;
//  this.sayHello = hello;
//}
//function Tom(name, sex, age){
//  Person.call(this, name);
//  this.age = age;
//  this.sayAll = function(){
//    console.log("info: ", this.age +" "+ this.name +" "+ this.sex);
//  }
//}
////class Person{
////  constructor(name) {
////    this.name = name;
////  }
////  sayName(){
////    console.log(this.name);
////  }
////}
//var e = new Tom("Tom", "man","15yesars old");
//e.sayHello()
//e.sayAll()
//
//class Point {
//  constructor(x, y) {
//    this.x = x;
//    this.y = y;
//  }
//  toString() {
//    return '(' + this.x + ', ' + this.y + ')';
//  }
//
//}
//
//class ColorPoint extends Point {
//  constructor(x, y, color) {
//    super(x, y);
//    this.color = color; // 正确
//  }
//  toString(){
//    return this.color + super.toString();
//  }
//}
////var p = new ColorPoint(1, 3, "red");
////console.log("string ： ", p.toString());
//for(var i = 0; i < 3; i ++){
//  (function(arg){
//    setTimeout(
//      function(){
//        console.log(arg)}
//      ,0)
//  })(i)
//
//}


//function currying(fn) {
//  var slice = Array.prototype.slice,
//      __args = slice.call(arguments, 1);
//  console.log("__args", __args);
//  console.log("arguments1", arguments);
//  return function () {
//    var __inargs = slice.call(arguments);
//    console.log("arguments2", arguments);
//    console.log("__inargs",__args.concat(__inargs));
//    return fn.apply(null, __args.concat(__inargs));
//  };
//}
//function square(i) {
//  return i * i;
//}
//
//function dubble(i) {
//  return i *= 2;
//}
//
//function map(handeler, list) {
//  return list.map(handeler);
//}
//
//var mapSQ = currying(map, square);
//mapSQ([1, 2, 3, 4, 5]);
//柯里化是把接受多个参数的函数变换成接受一个单一参数(最初函数的第一个参数)的函数，并且返回接受余下的参数且返回结果的新函数的技术。简单理解题目意思，就是指，我们将预定义的函数的参数逐一传入到curryIt中，当参数全部传入之后，就执行预定义函数。于是，我们首先要获得预定义函数的参数个数fn.length，然后声明一个空数组去存放这些参数。返回一个匿名函数接收参数并执行，当参数个数小于fn.length，则再次返回该匿名函数，继续接收参数并执行，直至参数个数等于fn.length。最后，调用apply执行预定义函数。
function bind(obj, fun){
  return function(){
    fun.apply(obj);
  }
}
var obj = {
  name: "tom",
  say: function(){
    console.log("hi~", this.name);
  }
}
var say = bind(obj, obj.say);
say();


function curryIt(fn) {
  var slice = [].slice,
      _args = slice.call(arguments, 1),
      length = fn.length;
  return function() {
    var arg = slice.call(arguments);
    _args.push(...arg);
    return _args.length < length? arguments.callee: fn.apply(null, _args);
  }
}

var fn = function(a, b, c) {
  return a + b + c
};
console.log(curryIt(fn)(1)(2)(3));
