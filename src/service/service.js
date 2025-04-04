import { dbConnection } from "../application/database.js";
import { rsvpValidation, validate } from "../validation/validation.js";
import { v4 as uuidv4 } from 'uuid';

const addRsvp = async (request) => {
    const rsvp = validate(rsvpValidation, request);
    const id = uuidv4();

    const SQLQuery = "INSERT INTO rsvp (id, nama, kehadiran, jumlah_tamu, ucapan) VALUES (?, ?, ?, ?, ?)";
    await dbConnection.query(SQLQuery, [id, rsvp.nama, rsvp.kehadiran, rsvp.jumlahTamu, rsvp.ucapan || null]);

    return "RSVP berhasil dikirim";
}

const getRsvp = async () => {
    const SQLQuery = "SELECT * FROM rsvp";
    const [results] = await dbConnection.query(SQLQuery);
    return results;
}

export default { addRsvp, getRsvp };