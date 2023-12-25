const CredentialsProvider = require('../utils/save-credentials')
const { urlRefreshToken } = require('../values/pathValues')
const httpRequest = require('../utils/http-request')

async function refreshAccessToken({refreshAccessToken}) {
    // Initialize credentials provider
    const credentials = CredentialsProvider.InitCredentials();
    
    // Retrieve necessary credentials
    const {
        client_id,
        redirect_uri,
        client_secret
    } = credentials.getCredentials();
    
    try {
        // Construct URL-encoded body parameters
        const bodyParams = new URLSearchParams({
            client_id,
            redirect_uri,
            client_secret,
            refresh_token: refreshAccessToken,
            grant_type: 'refresh_token',
        });

        // Make HTTP POST request to authenticate with OneDrive
        const response = await httpRequest({
            method: 'POST',
            url: urlRefreshToken,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: bodyParams.toString()
        });

        // Return the authentication response
        return response;
    } catch (error) {
        // Handle errors and return an error message
        return `Error: ${error}`;
    }
}
module.exports = refreshAccessToken;
