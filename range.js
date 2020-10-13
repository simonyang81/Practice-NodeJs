let defobj = require('./inherit')

function range(from, to) {

    // let r = defobj.inherit(range.method);
    function f() {}
    f.prototype = range.method
    let r = new f()

    r.from = from;
    r.to = to;

    return r;
}

range.method = {
    includes: function (x) {
        return this.from <= x && x <= this.to;
    },
    forearch: function (f) {
        for (let x = Math.ceil(this.from); x < this.to; x++) {
            f(x);
        }
    },
    toString: function () {
        return "(" + this.from + "..." + this.to + ")";
    }
}

let r = range(1, 3);
console.log(r.includes(2)); // => true