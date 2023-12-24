let instance;

/**
 * @param CredentialsProvider
 * It is singleton instance use for save
 * credentials for use of methods [AuthCount, GenerateCode, RefreshToken, SharedLink, UploadFile]
 */

class CredentialsProvider{
    credentials = {
        scope: '',
        client_id: '',
        client_secret: '',
        tenant_id: '',
        redirect_uri: '',
        refresh_token: '',
        response_type: ''
    };
    
    constructor(){}

    // Create Instance
    static InitCredentials(){
        if (!instance) {
            instance = new CredentialsProvider();
        }
        return instance;
    }
    
    // Get credentials from singleton instance
    getCredentials(){
        return this.credentials;
    }

    // Set the credentials in state
    setCredentials({
        scope,
        clientId,
        clientSecret,
        responseType,
        redirectUri,
        refreshToken,
        tenantId,
    }){
        this.credentials = {
            scope: scope,
            client_id: clientId,
            client_secret: clientSecret,
            response_type: responseType,
            redirect_uri: redirectUri,
            refresh_token: refreshToken,
            tenant_id: tenantId,
        }
    }
}

module.exports = CredentialsProvider;
