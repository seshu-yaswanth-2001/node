// A callback is nothing but calling another function in function arguments

function print(name, callbackFn) {
  console.log(`My name is ${name}`);
  callbackFn();
}

function address() {
  console.log("India");
}

print("Seshu", address);

// real world example for the same

import fs from "fs";

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.log("Error reading file", err);
    return;
  }
  console.log(`Reading data from file: ${data}`);
});

/**
(err, data) => {
  if (err) {
    console.log("Error reading file", err);
    return;
  }
  console.log(data);
}

This part is callback
 */
