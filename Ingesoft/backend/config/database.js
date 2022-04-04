import mysql from "mysql2";
  
// create the connection to database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'ingesoft_user',
  password: '123456789',
  database: 'ingesoft2'
});
 
export default db;