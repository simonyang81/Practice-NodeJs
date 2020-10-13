/**
 * 定义构造函数，这里并没有创建并返回一个对象，仅仅是初始化
 *
 * @param from
 * @param to
 * @constructor
 */
function Range(from, to) {
    this.from = from;
    this.to = to;
}

/**
 * 所有的Range对象都继承自这个对象
 * 属性的名字必须是prototype
 *
 * @type {{}}
 */
Range.prototype = {

    includes: function (x) {
        return this.from <= x && x <= this.to;
    },

    foreach: function (f) {
        for (let x = Math.ceil(this.from); x <= this.to; x++) {
            f(x);
        }
    },

    toString: function () {
        return "(" + this.from + "..." + this.to + ")";
    }

}

let r = new Range(1, 3);
let r1 = new Range(1, 5);
console.log(r.includes(2));
console.log(r.includes(4));
console.log(r1.includes(4));
r.foreach(console.log);
r1.foreach(console.log);
console.log(r.toString());
console.log(r1.toString());
