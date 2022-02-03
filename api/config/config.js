require('dotenv').config();

//variables
const api_port = process.env.API_PORT;

//db variables
const mongo_url = process.env.MONGO_URL;
const secret = process.env.SECRET;

module.exports = {
    mongo_url, api_port, secret
};