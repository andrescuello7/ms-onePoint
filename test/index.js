const cors = require('cors');
const express = require('express');
const onepoint = require('ms-onepoint');
require('dotenv').config();

// Settings
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Configuration of services of ms-onepoint
onepoint.configureCredentials({
    drive: {
        driveId: '',
        parentId: ''
    },
    microsoftAzure: {
        clientId: '',
        clientSecret: '',
        redirectUri: '',
    }
})

// Middlewares 
app.use(cors());

// Routes
app.use('/onedrive', require('./src/routes/onedrive.routes'));

app.use('/*', (req, res) => res.send({ error: { message: 'Not found', stateCode: 404 } }));

// Server
app.listen(port, () => console.log('Server running in port', port));