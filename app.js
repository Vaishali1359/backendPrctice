const http = require ("http");
const server=http.createServer((req ,res) =>{
    res.end("Hello Vaishali");
});

server.listen (3000,()=>{
    console.log("server is running protaol 3000")
})

// const http = require("http");

// const server = http.createServer((req, res) => {
//     res.end("Hello Vaishali");
// });

// server.listen(3000, () => {
//     console.log("Server is running on port 3000");
// });
