// Export Fuctions
const authOneDrive = require("./src/common/auth");
const generateAuthCode = require("./src/common/generateAuthCode");
const refreshAccessToken = require("./src/common/refreshAccessToken");
const createSharedLink = require("./src/common/createSharedLink");
const uploadFileToOneDrive = require("./src/common/uploadFile");
const configureCredentials = require("./src/config/configureCredentials");

module.exports = {
  authOneDrive,
  generateAuthCode,
  refreshAccessToken,
  createSharedLink,
  uploadFileToOneDrive,
  configureCredentials,
};