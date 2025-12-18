const fs = require("fs");
const path = require("path");

// Sync way

const dataFolder = path.join(__dirname, "data");
if(!fs.existsSync(dataFolder)) {
    fs.mkdirSync(dataFolder);
    console.log("Folder created Successfull");
}

const file = path.join(dataFolder, "example.txt");
fs.writeFileSync(file, "Hello from node js");
console.log("File Created Success");

const readFile = fs.readFileSync(file, "utf8");
console.log(readFile);

fs.appendFileSync(file, "\nThis is a new line added from append file sync");
console.log(fs.readFileSync(file, "utf8"));

// Async way
const asyncFile = path.join(dataFolder, "asyncFile");
fs.writeFile(asyncFile, "Hello from async node js", (err) => {
    if(err) throw new err;
    console.log("File Created!");

    fs.readFile(asyncFile, "utf8", (err, data) => {
        if(err) throw new err;
        console.log("async read: ", data);

        fs.appendFile(asyncFile, "\nThis is a new line from the async node js", (err) => {
            if(err) throw new err;
            console.log("New line added");

            fs.readFile(asyncFile, "utf8", (err, data) => {
                if(err) throw new err;
                console.log("async read: ", data)
            })
        })
    })
})