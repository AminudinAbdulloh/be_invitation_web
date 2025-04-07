import service from '../service/service.js';

const addRsvp = async (req, res, next) => {
    try {
        const result = await service.addRsvp(req.body);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

const getUcapan = async (req, res, next) => {
    try {
        const result = await service.getUcapan();
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

const getRsvp = async (req, res, next) => {
    try {
        const result = await service.getRsvp();
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

export default { addRsvp, getUcapan, getRsvp };