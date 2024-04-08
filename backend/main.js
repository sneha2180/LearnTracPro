import mysql from "mysql2";
import express from "express";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = 5000;

app.use(bodyParser.json());
var con = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: "learntracpro",
});

app.post("/signup", (req, res) => {
  const { email, password, role } = req.body;
  console.log(role);
  if (role == "student") {
    const query =
      "INSERT INTO student (email, password, role) VALUES (?, ?, ?)";
    con.query(query, [email, password, role], (error, results) => {
      if (error) {
        console.error("Error inserting signup data into MySQL:", error);
        res
          .status(500)
          .json({ error: "Error inserting signup data into MySQL" });
        return;
      }
      console.log("Signup data inserted into MySQL successfully:", results);
      res.status(200).json({ message: "Signup successful" });
    });
  }
  if(role==='tutor'){
    const query =
      "INSERT INTO tutor (email, password) VALUES (?, ?)";
    con.query(query, [email, password, role], (error, results) => {
      if (error) {
        console.error("Error inserting signup data into MySQL:", error);
        res
          .status(500)
          .json({ error: "Error inserting signup data into MySQL" });
        return;
      }
      console.log("Signup data inserted into MySQL successfully:", results);
      res.status(200).json({ message: "Signup successful" });
    });
  }
});
app.post('/signin', (req, res) => {
  const { email, password } = req.body;
  const query = 'SELECT * FROM student WHERE email = ? AND password = ?';
  con.query(query, [email, password], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Internal Server Error');
      return;
    }

    if (results.length > 0) {
      res.status(200).send('SignIn successful');
    } else {
      res.status(401).send('Invalid credentials');
    }
  });
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
