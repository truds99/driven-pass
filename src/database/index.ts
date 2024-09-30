import pg from "pg";
import dotenv from "dotenv";

const { Pool } = pg;
dotenv.config();
const db = new Pool({
    connectionString: process.env.DATABASE_URL
  });
  
db.connect()
    .then(client => {
        console.log('Successfully connected to the database');
        client.release();
    })
    .catch(err => {
        console.error('Failed to connect to the database', err);
    });


export default db;