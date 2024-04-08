const mysql = require('mysql');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost', // Your MySQL host
  user: 'username', // Your MySQL username
  password: 'password', // Your MySQL password
  database: 'your_database' // Your MySQL database name
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database.');
});

// SQL queries to create tables
const createTables = `
CREATE TABLE IF NOT EXISTS Assignment (
  AID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  question VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS Certificate (
  CID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  courseName VARCHAR(100) NOT NULL,
  date BIGINT NOT NULL
);

CREATE TABLE IF NOT EXISTS Course (
  CID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  timeofcompletion BIGINT NOT NULL,
  noofenrolledstudents BIGINT NULL,
  level VARCHAR(50) NOT NULL,
  description VARCHAR(255) NOT NULL,
  category VARCHAR(100) NOT NULL,
  subcategory VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS Discussion (
  DID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  description TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS Feedback (
  FID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  description VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS Student (
  SID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS Tutor (
  TID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(50) NOT NULL
);
`;

// Execute the create table queries
connection.query(createTables, (err, results) => {
  if (err) {
    console.error('Error creating tables:', err);
    return;
  }
  console.log('Tables created successfully.');
  // Close the connection
  connection.end();
});
