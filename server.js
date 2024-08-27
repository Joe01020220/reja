const http = require("http");
//const app = require("./app");
const mongodb = require("mongodb");

let db;
const connectionString = "mongodb+srv://javohir7707:theo200520@theo.v8cnr.mongodb.net"

mongodb.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err, client) => {
    if(err) console.log("ERROR on connection MongoDB");
    else {
        console.log("MongoDB connection succeed")
        module.exports = client;
        const app = require("./app");
       
        const server = http.createServer(app);
        let PORT = 4005;
        server.listen(PORT, function () {
    console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`);
 
});
    }
});

