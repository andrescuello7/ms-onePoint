// Export Fuctions
const authCountWithCode = require("./src/methods/authCount");
const generateCode = require("./src/methods/generateCode");
const refreshToken = require("./src/methods/refreshToken");
const sharedLink = require("./src/methods/sharedLink");
const uploadFile = require("./src/methods/uploadFile");

module.exports = {
  authCountWithCode,
  generateCode,
  refreshToken,
  sharedLink,
  uploadFile
};