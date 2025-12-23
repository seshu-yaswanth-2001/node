import fs from "fs";

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.log(`Error while reading the file: ${err}`);
    return;
  }
  console.log(`Input file: ${data}`);

  const modifyFile = data.toUpperCase();

  fs.writeFile("input.txt", modifyFile, (err) => {
    if (err) {
      console.log(`Error while reading the file: ${err}`);
    }

    console.log("Data Modified");

    fs.readFile("input.txt", "utf8", (err, data) => {
      if (err) {
        console.log(`Error reading file: ${err}`);
        return;
      }

      console.log(data);

      fs.rename("input.txt", "output.txt", (err) => {
        if (err) {
          console.log(`Error while modyfing the name: ${err}`);
        }
        console.log("Success in change of file name");
      });
    });
  });
});
