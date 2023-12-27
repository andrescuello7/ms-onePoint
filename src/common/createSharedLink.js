const { urlSharedLink } = require('../values/pathValues')
const httpRequest = require('../utils/http-request')
const CredentialsProvider = require('../utils/save-credentials')

async function createSharedLink({fileId, authToken, type}) {
    // Initialize credentials provider
    const credentials = CredentialsProvider.InitCredentials();
    
    // Retrieve necessary credentials
    const { drive_id } = credentials.getDrive();
    try {
        // Make HTTP POST request for sharedLink photo OneDrive
        const response = await httpRequest({
            method: 'POST',
            url: urlSharedLink({
                driveId: drive_id,
                fileId
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authToken}`
            },
            body: JSON.stringify(type)
        });

        // Return the authentication response
        return response;
    } catch (error) {
        // Handle errors and return an error message
        return `Error: ${error}`;
    }
}
module.exports = createSharedLink;
