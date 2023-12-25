const CredentialsProvider = require('../utils/save-credentials')
const { urlAuthentication } = require('../values/pathValues')
const httpRequest = require('../utils/http-request')

/**
 * Authenticates with OneDrive using the authorization code.
 *
 * @param {Object} params - Parameters for authentication.
 * @param {string} params.code - The authorization code obtained through the OAuth2 flow.
 * @returns {Promise<Object|string>} - A Promise that resolves to the authentication response or an error message.
 */
async function authOneDrive({ code }) {
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
            code,
            client_id,
            redirect_uri,
            client_secret,
            grant_type: 'authorization_code',
        });

        // Make HTTP POST request to authenticate with OneDrive
        const response = await httpRequest({
            method: 'POST',
            url: urlAuthentication,
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

module.exports = authOneDrive;
