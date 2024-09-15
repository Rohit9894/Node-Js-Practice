const fs = require("fs");

// creating file Sync
// fs.writeFileSync("./text.txt", "Hey there");
//Async
// fs.writeFile("./text.txt", "Hey Rohit", (err) => {
//   console.log(err);
// });

// Reading File---------------

// const result=fs.readFileSync("./text.txt","utf-8");
// console.log(result)
// const result = fs.readFile("./text.txt", "utf-8", (err, result) => {
//   console.log(result);
// });


// appendfile-----

// fs.appendFileSync("./text.txt",`How are you\n`)

//copyfile----
// fs.cpSync("./text.txt","./copy.txt")


// Deletefile------
fs.unlinkSync("./copy.txt");
