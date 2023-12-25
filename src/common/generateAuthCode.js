const CredentialsProvider = require('../utils/save-credentials')
const { urlGenterateCodeAccess } = require('../values/pathValues')

async function generateAuthCode() {
    // Initialize credentials provider
    const credentials = CredentialsProvider.InitCredentials();

    // Retrieve necessary credentials
    const {
        client_id,
        redirect_uri,
    } = credentials.getCredentials();

    try {
        // Response of generete code access
        const response = urlGenterateCodeAccess({
            clientId: client_id,
            redirectUri: redirect_uri,
            responseType: 'code',
            scope: 'User.ReadWrite offline_access Files.Read.All Files.ReadWrite.All Sites.Read.All Sites.ReadWrite.All'
        });
        // Return the url for code response
        return { urlGenterateCodeAccess: response };
    } catch (error) {
        // Handle errors and return an error message
        return `Error: ${error}`;
    }
}
module.exports = generateAuthCode;
