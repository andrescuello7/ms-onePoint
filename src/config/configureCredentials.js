const CredentialsProvider = require('../utils/save-credentials')

/** 
 * @param configureCredentials
 * This is the configuration of credentials for use
 * in providers whit methods...
 */
function configureCredentials({
    microsoftAzure: {
        /** 
         * @param clientId
         * In Microsoft Azure 
         * is option 'Application ID (client)'
         */
        clientId,
        /** 
         * @param clientSecret
         * In Microsoft Azure 
         * is option 'AClient credentials'
         */
        clientSecret,
        /** 
         * @param tenantId
         * In Microsoft Azure 
         * is option 'Directory ID (tenant)'
         */
        tenantId,
        /** 
         * @param redirectUri
         * In Microsoft Azure 
         * is option 'Redirect URI'
         */
        redirectUri,
    },
    drive: {
        /** 
         * @param driveId
         */
        driveId,
        /** 
         * @param parentId
         */
        parentId,
        /** 
         * @param fileName
         */
        fileName,
    }
}) {
    // Initialized credentials sigleton
    const provider = CredentialsProvider.InitCredentials();

    // Set credentials
    provider.setCredentials({
        clientId,
        clientSecret,
        tenantId,
        redirectUri
    });
    // Set Drive
    provider.setDrive({
        driveId,
        parentId,
    });
}

module.exports = configureCredentials;
