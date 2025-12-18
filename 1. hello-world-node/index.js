console.log("Hello world");

const arr = [1, 2, 3, 4, 5];

for(let num of arr) {
    console.log(num);
}

setTimeout(() => {
    console.log("This will print after 2 seconds");
}, 2000);

console.log("This is the End.");