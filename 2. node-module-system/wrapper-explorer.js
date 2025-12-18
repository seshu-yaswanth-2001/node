console.log("In Wrapper Explorer");

console.log("__filename from explorer", __filename);
console.log("__dirname from explorer", __dirname);

module.exports.greet = (name) => {
    return `Good Morning ${name}`;
}