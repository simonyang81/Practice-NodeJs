exports.inherit = function (p) {
    if (p == null) throw TypeError();   // p 是一个对象，但不能是 null
    if (Object.create) {    // 如果Object.create()存在，直接使用它
        return Object.create(p);
    }
    let t = typeof p;   // 否则进一步检查
    if (t !== "object" && t !== "function") {
        throw TypeError();
    }
    function f() {}     // 定义个一个空的构造函数
    f.prototype = p;    // 将其原型属性设置为p
    return new f();     // 使用 f() 创建p的继承对象
}