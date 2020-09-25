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

// 内置构造函数的原型是 只读 的
Object.prototype = 0;   // 赋值失败，但没有报错，Object.prototype没有修改

// "属性1" in 对象1，检查'对象1'是否有'属性1'
var o = {x:1, x1:2}
console.log("\n属性 in 对象 -->>")
console.log('"x" in o = %s', "x" in o);  // => true, "x"是o的属性
console.log('"y" in o = %s', "y" in o);  // => false, "y"不是对象o的属性
console.log('"toString" in o = %s', "toString" in o);   // => true

// 对象的hasOwnProperty()方法用来检测给定的名字是否是对象的自由属性
console.log("\nhasOwnProperty() -->>")
console.log('o.hasOwnProperty("x") == %s', o.hasOwnProperty("x"));  // => true，o中有个自有属性x
console.log('o.hasOwnProperty("y") == %s', o.hasOwnProperty("y"));  // => false，o中不存在属性x
console.log('o.hasOwnProperty("toString") == %s', o.hasOwnProperty("toString"));   // => false, toString是继承属性

// 除了使用in操作符之外，另一种更简便的方式就使用"!=="判断一个属性是否是undefined
console.log("\nundefined -->>")
console.log('o.x !== undefined: %s', o.x !== undefined);    // => true, o中有x属性
console.log('o.y !== undefined: %s', o.y !== undefined);    // => false, o中没有y属性
console.log('o.toString !== undefined: %s', o.toString !== undefined);  // => true, o继承了toString属性

// 枚举一个对象的属性
console.log(Object.keys(o));

var o1 = {
    data_prop : "value",

    // 读取 accessor_prop 属性
    get accessor_prop() { /* 这里是函数体 */ },

    // 写入 accessor_prop 属性
    set accessor_prop(value) { /* 这里是函数体 */ }
}

console.log(o1.accessor_prop)

var p = {
    // x 和 y 是普通的可读写的数据属性
    x : 1.0,
    y : 1.0,

    // r 是可读写的存取器属性，它有getter 和 setter
    get r() {
        // this指向表示这个点的对象
        return Math.sqrt(this.x * this.x + this.y * this.y);
    },

    set r(newvalue) {
        var oldvalue = Math.sqrt(this.x * this.x + this.y * this.y);
        var ratio = newvalue / oldvalue;
        this.x *= ratio;
        this.y *= ratio
    },

    // theta是只读存取器属性，它只有getter方法
    get theta() { return Math.atan2(this.y, this.x); }

}

console.log(Object.getOwnPropertyDescriptor({x:1, y:2}, "x"));  // => { value: 1, writable: true, enumerable: true, configurable: true }
console.log(Object.getOwnPropertyDescriptor({x:1, y:2}, "y"));  // => { value: 2, writable: true, enumerable: true, configurable: true }

var obj1 = {x: 1, y: 2, z: [false, null, ""]};
console.log(obj1);
s = JSON.stringify(obj1);
var obj2 = JSON.parse(s);   // obj2 是 obj1 的深拷贝
obj2.z1 = 3
console.log(obj2);
console.log(obj1);

console.log("\n==== 数组 ====\n");

var empty = []; // 没有元素的数组
var primes = [2, 3, 5, 7, 11];  // 有5个数值的数组
var misc = [1.1, true, "a", ];  // 3个不同类型的元素和结尾的逗号
console.log(empty, primes, misc);

var count = [1,,3]; // 数组有3个元素，中间的那个元素值为undefined
var undefs = [,,,]; // 数组有3个元素，都是undefined
console.log(count);
console.log(undefs);

var a = new Array(10);
console.log(a);

var a1 = new Array(5, 4, 3, 2, 1, "testing");   // 相当于 [5, 4, 3, 2, 1, "testing"]
console.log(a1);

// 稀疏数组，包含从0开始的不连续索引的数组。
var arr = ["Hello"];
arr[1] = "World";
arr[101] = "SSSS"
console.log(arr);
console.log("arr length: %d", arr.length);  // => 102
arr.length = 0; // 删除数组所有元素
console.log(arr);

var arr1 = [1, 2, 3];
// 让length属性只读
arr1[3] = 4;
Object.defineProperty(arr1, "length", {writable: false});
arr1.length = 0;    // arr1 不会改变
arr1[4] = 5;        // 不能增加元素
console.log(arr1, "\n", "arr1 length: ", arr1.length);


var obj3 = {};  // 创建一个普通对象
obj3[1] = "one";    // 索引值1变成"1" —— 然后将其作为属性名来使用。
console.log(obj3);  // => { '1': 'one' }
obj3[2] = "two";    // 索引值2变成"2"
console.log(obj3);  // => { '1': 'one', '2': 'two' }

var arr2 = [];  // 一个空数组
arr2[0] = "zero";   // 向其中添加元素
arr2[1] = "one";
console.log(arr2);  // => [ 'zero', 'one' ]

arr3 = [];  // 一个空数组
arr3.push("one");       // 向末尾添加元素
arr3.push("two", "three");
arr3.unshift("zero");   // 向首部传入一个元素
console.log(arr3);  // => [ 'zero', 'one', 'two', 'three' ]

arr4 = [1, 2, 3];
console.log(arr4);
console.log(arr4.length);
delete arr4[1];     // 删除索引1的元素
console.log(arr4);
console.log(1 in arr4);     // => false, 索引1的位置为空
console.log(arr4.length);   // => 3, delete操作并不影响数组的长度
console.log(arr4);

var arr5 = [1, 2, 3, 5, 4];
for (var i = 0, len = arr5.length; i < len; i++) {
    if (!arr5[i]) {    // 跳过null, undefined和不存在的元素
        continue;
    }
    console.log("index: %d; value: %d", i, arr5[i]);
}

arr5.forEach(function (value, index, array) {
    console.log("value: %d", value);
    console.log("index: %d", index);
    console.log(array);
})

// join(), 把数组按字符串拼接; 没参数的话，默认使用逗号
var a = [1, 2, 3]
console.log(a.join());       // "1,2,3"
console.log(a.join("-"));    // "1-2-3"
var s = a.join();
var a1 = s.split(",");  // join 的相反操作，将字符串分成若干份来创建一个数组
console.log(a1);

// reverse(), 数组元素倒序
console.log(a.reverse());   // 将数组颠倒顺序

/**
 * sort(), 排序。当不带参数调用sort()时，数组元素以字母顺序排序
 * 如果包含undefined元素，它们会被排到数组的末尾
 */
var a = ["banana", "cherry", "apple"];
a.sort();
console.log(a);