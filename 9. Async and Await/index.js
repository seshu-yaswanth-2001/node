function delayedFn(delay) {
  return new Promise((res) => setTimeout(res, delay));
}

async function delayPrint() {
  await delayedFn(2000);
  console.log("Delay 2000ms");
}

delayPrint();

async function divison(num1, num2) {
  try {
    if (num2 === 0) throw new Error("Cannot divide by Zero");
    return num1 / num2;
  } catch (err) {
    console.error(err);
    return null;
  }
}

async function div() {
  console.log(await divison(4, 2));
  console.log(await divison(2, 0));
}

div();
