const express    = require('express');
const bodyParser = require('body-parser');
const config     = require('config');
const consign    = require('consign');
const { cwd } = require('process');

module.exports = () => {
    const app = express();

    app.set('port', process.env.PORT || config.get('server.port'));
    app.use(bodyParser.json());

    const path = require('path');
    const base = path.join(__dirname, '..');
consign({cwd: base})
    .then('data')
    .then('controllers')
    .then('routes')
    .into(app);
        
    return app;
};