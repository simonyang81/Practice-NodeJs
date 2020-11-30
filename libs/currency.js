let canadianDollar = 0.91;

function round2Decimals(amount) {
    return Math.round(amount * 100) / 100;
}

/**
 * canadian2US 函数设定在 exports 模块中，所以引入这个模块的代码可以使用它
 *
 * @param canadian
 * @returns {*}
 */
exports.canadian2US = function (canadian) {
    return round2Decimals(canadian * canadianDollar);
}

/**
 * US2Canadian 函数设定在 exports 模块中，所以引入这个模块的代码可以使用它
 *
 * @param us
 * @returns {*}
 * @constructor
 */
exports.US2Canadian = function (us) {
    return round2Decimals(us / canadianDollar);
}
