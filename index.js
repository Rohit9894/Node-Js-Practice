const jwt = require("jsonwebtoken");
const bcrypt=require("bcrypt");


// jwt --------------------------
let secret = "xyz";
let token = jwt.sign({ id: 1, name: "Rohit Gupta" }, secret, {
  expiresIn: "1d",
});

// we can also use error in this way
// try {
//     let decoded = jwt.verify(token, secret); 
//     console.log("Token is valid:", decoded);
// } catch (error) {
//     console.error("Invalid token:", error.message);
// }


// Bcrypt -----------------





 

