const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

    routes.post('/sessions', SessionController.Create);

    routes.get('/ongs', OngController.List);
    routes.post('/ongs', OngController.Create);

    routes.get('/profile', ProfileController.List);

    routes.get('/incidents', IncidentController.List);
    routes.post('/incidents', IncidentController.Create);
    routes.delete('/incidents/:id', IncidentController.Remove);


module.exports = routes;
