const http = require('http');
const app = require('./app');
const server  = http.createServer(app);

const { PORT } = process.env.PORT;
const port = process.env.PORT || PORT;

//server listening
server.listen(PORT, () => {
    console.log(`Server running on port ${port}`);
});