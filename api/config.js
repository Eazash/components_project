require('dotenv').config();

//variables
const api_port = process.env.API_PORT;

//db variables
const mongo_url = process.env.MONGO_URL;

module.exports = {
    mongo_url, api_port
};