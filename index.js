const http = require('http');
const app = require('./app');
const server  = http.createServer(app);
require('dotenv').config()

//server listening
server.listen(process.env.PORT, () => {
    console.log(`Server running on port ${port}`);
});