import { dbConnection } from "../application/database.js";
import { rsvpValidation, validate } from "../validation/validation.js";
import { v4 as uuidv4 } from 'uuid';
import { ResponseError } from "../error/response-error.js";

const addRsvp = async (request) => {
    const batasWaktu = new Date("May 18, 2025 08:00:00").getTime();
    const sekarang = Date.now();

    if (sekarang > batasWaktu) {
        throw new ResponseError(400, "Batas waktu habis! Kamu tidak dapat konfirmasi atau ubah konfirmasi kedatangan kamu.");
    }

    const rsvp = validate(rsvpValidation, request);
    const id = uuidv4();

    const SQLQuery = "INSERT INTO rsvp (id, nama, kehadiran, jumlah_tamu, ucapan) VALUES (?, ?, ?, ?, ?)";
    await dbConnection.query(SQLQuery, [id, rsvp.nama, rsvp.kehadiran, rsvp.jumlahTamu, rsvp.ucapan || null]);

    return "RSVP berhasil dikirim";
}

const getUcapan = async () => {
    const SQLQuery = "SELECT nama, created_at, ucapan FROM rsvp";
    const [results] = await dbConnection.query(SQLQuery);
    return results;
}

const getRsvp = async () => {
    const SQLQuery = "SELECT * FROM rsvp";
    const [results] = await dbConnection.query(SQLQuery);
    return results;
}

export default { addRsvp, getUcapan, getRsvp };