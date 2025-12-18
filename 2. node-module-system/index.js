// module.exports (Common js) -> same as export (this is coming from ESmodule)
// require (common js) -> same as import (this is coming from ES module)

const ops = require("./operationModules");
console.log(ops.add(1, 2));
console.log(ops.sub(4, 2));
console.log(ops.div(4, 2));
try {
    console.log("Trying to divide by zero");
    let result = ops.div(4, 0);
    console.log(result);
}catch(err) {
    console.log("Caught an error", err.message);
}
console.log(ops.div(0, 4));
console.log(ops.multiply(4, 3));