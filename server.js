const http = require("http");
const fs = require("fs");
const path = require("path");
const { myDb } = require("./database");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const url = require("url");
const queryString = require("querystring");
require("dotenv").config();
const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url);
  let fileExtension = path.extname(req.url, true);
  let filePath = path.join(__dirname, req.url);
  let imagePath = path.join(__dirname, req.url);
  let contentType;
  switch (fileExtension) {
    case ".css":
      contentType = "text/css";
      let cssStream = fs.createReadStream(filePath, "utf-8");
      res.writeHead(200, contentType);
      cssStream.pipe(res);
      break;
    case ".js":
      contentType = "text/javascript";
      let jsStream = fs.createReadStream(filePath, "utf-8");
      res.writeHead(200, contentType);
      jsStream.pipe(res);
      break;
    case ".png":
      contentType = "image/png";
      let pngStream = fs.createReadStream(imagePath, "");
      console.log(filePath);
      res.writeHead(200, contentType);
      pngStream.pipe(res);
      break;
    case ".jpg":
      contentType = "image/jpg";
      let jpgStream = fs.createReadStream(imagePath, "");
      res.writeHead(200, contentType);
      jpgStream.pipe(res);
      break;
    default:
      contentType = "text/html";
  }

  // SIGNUP REQUEST
  if (req.url == "/api/renters" && req.method == "POST") {
    let body;
    req.on("data", function (data) {
      body = JSON.parse(data);
    });
    req.on("end", async () => {
      const { fullName, email, password, address, imageId, phone } = body;
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(password, salt);
      let insert = `INSERT INTO customers (customer_name, customer_email, customer_password, customer_phone, customer_address)
                VALUES ("${fullName}", "${email}", "${hashedPassword}", "${phone}", "${address}"); `;
      let exist = `SELECT * FROM customers
                WHERE customer_email = "${email}" AND customer_name="${fullName}" AND customer_phone="${phone}"`;
      myDb.query(exist, function (err, rawData, fields) {
        if (err) throw err;
        let response = {
          userExist: true,
          success: true,
          user: rawData[0],
        };
        if (rawData.length === 0) {
          response.userExist = false;
          myDb.query(insert, function (err, rawData, fields) {
            if (err) throw err;
          });
          response.user = {
            fullName: `${fullName}`,
            email: `${email}`,
            phone: `${phone}`,
          };
        }
        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify(response));
        // myDb.end();
      });
    });
  } else if (req.url == "/api/vendor" && req.method == "POST") {
    let body;
    req.on("data", function (data) {
      body = JSON.parse(data);
    });
    req.on("end", async () => {
      const { fullName, email, password, address, imageId, phone } = body;
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(password, salt);
      let insert = `INSERT INTO vendors (vendor_name, vendor_email, vendor_password, vendor_phone, vendor_address)
                VALUES ("${fullName}", "${email}", "${hashedPassword}", "${phone}", "${address}"); `;
      let exist = `SELECT * FROM vendors
                WHERE vendor_email = "${email}" AND vendor_name="${fullName}" AND vendor_phone="${phone}"`;
      myDb.query(exist, function (err, rawData, fields) {
        if (err) throw err;
        let response = {
          userExist: true,
          success: true,
          user: rawData[0],
        };
        if (rawData.length === 0) {
          response.userExist = false;
          myDb.query(insert, function (err, rawData, fields) {
            if (err) throw err;
          });
          response.user = {
            fullName: `${fullName}`,
            email: `${email}`,
            phone: `${phone}`,
          };
        }
        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify(response));
        // myDb.end();
      });
    });
  }

  // LOGIN

  if (req.url == "/api/login" && req.method == "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", async () => {
      const { email, password } = JSON.parse(body);
      myDb.query(
        "SELECT * FROM customers WHERE customer_email = ?",
        [email],
        async (error, results) => {
          if (error) throw error;

          if (results.length === 0) {
            res.statusCode = 401;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ message: "Invalid email or password" }));
          } else {
            const user = JSON.stringify(results[0]);
            const existPass = JSON.parse(user);
            const { customer_password } = existPass;
            const auth = await bcrypt.compare(password, customer_password);
            if (auth) {
              res.statusCode = 200;
              res.setHeader("Content-Type", "application/json");
              res.end(
                JSON.stringify({
                  isUser: true,
                  details: user,
                })
              );
            } else {
              res.statusCode = 401;
              res.setHeader("Content-Type", "application/json");
              res.end(JSON.stringify({ message: "Invalid email or password" }));
            }
          }
        }
      );
    });
  }
  //SERVING OTHER FILES
  if (req.url == "/" || req.url == "/index.html") {
    //

    fs.readFile("index.html", "utf-8", (err, data) => {
      if (err) {
        console.log(new Error(err));
      }
      res.writeHead(200, { contentType });
      res.end(data);
    });
  } else if (req.url === "/login.html") {
    fs.readFile("login.html", "utf-8", (err, data) => {
      if (err) {
        console.log(new Error(err));
      }
      res.writeHead(200, { contentType });
      res.end(data);
    });
  } else if (req.url == "/customersignup.html") {
    fs.readFile("customersignup.html", "utf-8", (err, data) => {
      if (err) {
        console.log(new Error(err));
      }
      res.writeHead(200, { contentType });
      res.end(data);
    });
  } else if (req.url == "/vendorsignup.html") {
    res.writeHead(500, { "Content-Type": "text/html" });
    res.end(`
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="customer.css" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <title>Vendor signup not available yet</title>
  </head>
  <body>
<h1>Vendor sign up page is not available yet sir.
We are very sorry! 😭</h1>
  </body>
</html>

    `);
  } else if (pathname == "/user") {
    const params = queryString.parse(query);
    const { email, name, phone } = params;
    //Read the main template file
    fs.readFile("customer.html", "utf8", (err, data) => {
      if (err) {
        console.error("Error reading template file:", err);
        res.statusCode = 500;
        res.end("Internal Server Error");
        return;
      }
      // Generate the main file by replacing the placeholders with user details
      let mainFileContent = data.replace("{customername}", name);
      // Add more replacements for additional user details as needed
      // Set the response headers
      res.setHeader("Content-Type", "text/html");
      // Send the main file as the response
      res.statusCode = 200;
      res.end(mainFileContent);
    });
  }
});

server.listen(PORT, () => {
  console.log("Server is up and running...");
});
