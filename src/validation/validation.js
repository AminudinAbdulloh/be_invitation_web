import Joi from "joi";
import { ResponseError } from "../error/response-error.js";

export const rsvpValidation = Joi.object({
    nama: Joi.string().max(225).required(),
    kehadiran: Joi.string().max(225).required(),
    jumlahTamu: Joi.number().max(5).required(),
    ucapan: Joi.string().optional(),
});

export const validate = (schema, request) => {
    const result = schema.validate(request);
    if(result.error) {
        throw new ResponseError(400, result.error.message);
    } else {
        return result.value;
    }
}