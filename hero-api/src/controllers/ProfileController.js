const connection = require('../database/connection');

module.exports = {
    async List(req, resp) {
        const ong_id = req.headers.authorization;

        const incidents = await connection('incidents')
            .where('ong_id', ong_id).select('*');

        return resp.json(incidents);
    }
}
