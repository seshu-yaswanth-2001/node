function delayPrint(delay) {
  return new Promise((res) => setTimeout(res, delay));
}

console.log("Delay function started");
delayPrint(2000).then(() => console.log(`Promise resolved after 2000ms`));
console.log("end");

function dividefn(num1, num2) {
  return new Promise((resolve, reject) => {
    if (num2 === 0) {
      reject("Cannot divide by zero");
    } else {
      resolve(num1 / num2);
    }
  });
}

dividefn(5, 0)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
