const { urlUploadFile } = require('../values/pathValues')
const httpRequest = require('../utils/http-request')
const CredentialsProvider = require('../utils/save-credentials')

async function uploadFile({ data, authToken, fileName }) {
    const credentials = CredentialsProvider.InitCredentials().getDrive();
    // Initialize credentials provider
    try {
        // Make HTTP POST request to authenticate with OneDrive
        const response = await httpRequest({
            method: 'PUT',
            url: urlUploadFile({
                driveId: credentials.drive_id,
                parentId: credentials.parent_id,
                fileName: fileName
            }),
            headers: {
                'Content-Type': 'image/png',
                'Authorization': `Bearer ${authToken}`
            },
            body: data
        });
        // Return the authentication response
        return response;
    } catch (error) {
        // Handle errors and return an error message
        return `Error: ${error}`;
    }
}

module.exports = uploadFile;
