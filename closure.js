function A() {

    let counter = 0;

    function B() {
        return counter ++;
    }

    return B;
}
let a = A();
console.log(a());
console.log(a());
console.log(a());
