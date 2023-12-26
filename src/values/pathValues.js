//Urls for methods of http
const urlRefreshToken = 'https://login.microsoftonline.com/common/oauth2/v2.0/token';
const urlAuthentication = 'https://login.microsoftonline.com/common/oauth2/v2.0/token';

//Urls with params
const urlGenterateCodeAccess = ({ clientId, scope, responseType, redirectUri }) => `https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=${clientId}&scope=${scope}&response_type=${responseType}&redirect_uri=${redirectUri}`;
const urlUploadFile = ({ driveId, parentId, fileName }) => `https://graph.microsoft.com/v1.0/drives/${driveId}/items/${parentId}:/${fileName}:/content`;
const urlSharedLink = ({ driveId, fileId  }) => `https://graph.microsoft.com/beta/drives/${driveId}/items/${fileId}/createLink`;

module.exports = {
    urlGenterateCodeAccess,
    urlAuthentication,
    urlRefreshToken,
    urlUploadFile,
    urlSharedLink
}