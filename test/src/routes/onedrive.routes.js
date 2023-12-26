const router = require('express').Router();

const {
    uploadFile,
    generateAuthCode,
    authenticateCodeAccess,
} = require('../controllers/onedrive.controller');

router
      .get('/codeAccess', generateAuthCode)
      .post('/authCodeAccess', authenticateCodeAccess)
      .put('/uploadFile', uploadFile);

module.exports = router;