// Export Fuctions
const authOneDrive = require("./src/common/auth");
const generateAuthCode = require("./src/common/generateAuthCode");
const createSharedLink = require("./src/common/createSharedLink");
const refreshAccessToken = require("./src/common/refreshAccessToken");
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
