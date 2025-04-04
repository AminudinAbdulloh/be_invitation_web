import mysql from 'mysql2/promise';
import 'dotenv/config';

export const dbConnection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: '',
    database: 'rsvp_pernikahan_tiara_jalu'
});