const http = require("http");
const PORT = 3000;
const router = require("./router");
require("dotenv").config();
console.log(process.env.API_KEY);

const server = http.createServer(router);

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
