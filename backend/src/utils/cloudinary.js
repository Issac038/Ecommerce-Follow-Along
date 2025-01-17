const cloudinary = require('cloudinary').v2;
const path = require("node:path")
if (process.env.NODE_ENV !== 'PRODUCTION') {
  require('dotenv').config({
    path: path.resolve(__dirname, '../configurations/.env'),
  });
}
console.log("creds",process.env.cloud_name, "process.env.api_key");


cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
});

module.exports = cloudinary;