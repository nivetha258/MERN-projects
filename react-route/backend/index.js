
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Construct the absolute path to the database file
const dbPath = path.resolve('C:/Users/Dell/Desktop', 'sqlLiteTest.db');

// open the database
let db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err,result) => {
  if (err) {
    console.error("help1",err.message);
  }
  console.log("han",result)
  console.log('Connected to the chinook database.');
});

db.serialize(() => {
  db.each(`SELECT name , email
           FROM user`, (err, row) => {
    if (err) {
      console.error("help2",err.message);
    }
    // console.log(row.id + "\t" + row.name);
    console.log("LLL",row)
  });
});

db.close((err) => {
  if (err) {
    console.error("help3",err.message);
  }
  console.log('Close the database connection.');
});