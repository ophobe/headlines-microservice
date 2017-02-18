'use strict';

const express = require('express.co');
const app = express();
const cheerio = require('cheerio');
const fs = require('fs');
require('dotenv').config();

/*
 |----------------------------------------------------------------------------------------------------------------------
 | Routes
 |----------------------------------------------------------------------------------------------------------------------
 */

app.get('/fetch/:source', require('./controllers/base'));
app.get('*', (req, res) => res.json({error: 'Invalid route'}));

/*
 |----------------------------------------------------------------------------------------------------------------------
 | Listen
 |----------------------------------------------------------------------------------------------------------------------
 */

app.listen(process.env.PORT, () => console.log('Application running on http://localhost:' + process.env.PORT));