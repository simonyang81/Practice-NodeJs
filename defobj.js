var book = {
    "main title" : "JavaScript",    // 属性名里有空格，必须用字符串表示
    "sub-title" : "The Definitive Guide",    // 属性名字里有连字符，必须用字符串表示
    "for" : "all audiences", // for 是保留字，必须用引号
    author: {   // 这个属性的值是一个对象
        firstname : "David", // 注意，这里的属性名都没有引号
        surname: "Flanagan"
    }
}

console.log(Object.prototype);
var o1 = Object.create(null);
var o2 = Object.create({x:1, y:2});
console.log(o1);
console.log(o2);

function inherit(p) {
    if (p == null) throw TypeError();   // p 是一个对象，但不能是 null
    if (Object.create) {    // 如果Object.create()存在，直接使用它
        return Object.create(p);
    }
    var t = typeof p;   // 否则进一步检查
    if (t !== "object" && t !== "function") {
        throw TypeError();
    }
    function f() {}     // 定义个一个空的构造函数
    f.prototype = p;    // 将其原型属性设置为p
    return new f();     // 使用 f() 创建p的继承对象
}

var author = book.author;   // 得到book的"author"属性
var name = author.surname;  // 获得book的author的"surname"属性
var title = book["main title"]; // 获得book的 "main title" 属性

book.edition = 6;   // 给book创建一个名为"edition"的属性

var x = 0, y = 0;
console.log("x === 0 && y === 0: " + (x === 0 && y === 0));    // => true, 当x和y都为0的时候，返回true

console.log("=================")

var o = {}
o.x = 1;
var p = inherit(o);
p.y = 2;
var q = inherit(p);
q.z = 3;
var s = q.toString();
console.log(q.x + q.y); // => 3。x和y分别继承o和p

console.log("=================")

var unitcircle = {r:1}
var c = inherit(unitcircle);
c.x = 1; c.y = 1;
c.r = 2;
console.log(unitcircle.r);  // => 1, 原型对象没有修改
console.log(c.r);   // => 2

console.log(book["subtitle"]);  // => undefined, 属性不存在
var len = book["sub-title"].length
console.log(len)

// 内置构造函数的原型是 只读 的
Object.prototype = 0;   // 赋值失败，但没有报错，Object.prototype没有修改


