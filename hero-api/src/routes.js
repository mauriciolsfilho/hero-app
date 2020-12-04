const express = require('express');
//const { celebrate, Segments, Joi } = require('celebrate');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

    routes.post('/sessions', SessionController.Create);

    //ONG'S
    routes.get('/ongs', OngController.List);
    routes.post('/ongs', OngController.Create);

    //PROFILE
    routes.get('/profile', ProfileController.List);

    //INCIDENT
    routes.get('/incidents', IncidentController.List);
    routes.post('/incidents', IncidentController.Create);
    routes.delete('/incidents/:id', IncidentController.Remove);


module.exports = routes;
