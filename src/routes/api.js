const { Router } = require('express');
const app = Router();

const Companies = require('../controllers/companies/companies');

//company routes
app.get('/companies', Companies.index);
app.get('/companies/:companyId', Companies.findBy);
app.post('/companies', Companies.create);
app.delete('/companies/:companyId', Companies.removeBy);
app.put('/companies/:companyId', Companies.update)

module.exports = app;