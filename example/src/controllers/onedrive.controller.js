const onepoint = require('ms-onepoint');
const fs = require('fs');

const generateAuthCode = async (req, res) => {
    try {
        const response = await onepoint.generateAuthCode();
        res.status(200).send(response)
    } catch (error) {
        res.status(400).send({ error: "Error in request of generate authentication code" })
    }
};

const authenticateCodeAccess = async (req, res) => {
    try {
        const response = await onepoint.authOneDrive({ code: process.env.ONEDRIVE_CODE });
        res.status(200).send(response)
    } catch (error) {
        res.status(400).send({ error: "Error in request of auth" })
    }
};

const uploadFile = async (req, res) => {
    try {
        const { access_token } = await onepoint.refreshAccessToken({ refreshAccessToken: process.env.ONEDRIVE_REFRESH_TOKEN });
        const { id } = await onepoint.uploadFileToOneDrive({ authToken: access_token, data: fs.readFileSync('./store.png'), fileName: 'store.png' });
        const { link } = await onepoint.createSharedLink({ authToken: access_token, fileId: id, type: { type: 'edit' }});
        res.status(200).send({ response: link })
    } catch (error) {
        res.status(400).send({ error: `Error ${error}` })
    }
};

module.exports = {
    uploadFile,
    generateAuthCode,
    authenticateCodeAccess,
}