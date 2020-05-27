const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

    routes.post('/sessions', SessionController.Create);

    routes.get('/ongs', OngController.List);
    routes.post('/ongs', celebrate({
        [Segments.BODY: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().required().email(),
            whatsapp: Joi.number().required().min(10).max(11),
            city: Joi.string(), required(),
            uf: Joi.string().required().length(2)
        })]
    }), OngController.Create);

    routes.get('/profile', ProfileController.List);

    routes.get('/incidents', IncidentController.List);
    routes.post('/incidents', IncidentController.Create);
    routes.delete('/incidents/:id', IncidentController.Remove);


module.exports = routes;
