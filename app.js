const http = require ("http");

const ports = 3000;
const server=http.createServer((req ,res) =>{
    res.end("Hello Vaishali & asutosh");
});
const server1=http.createServer((req ,res) =>{
 res.end("Hii this my  file to push github")
})

server.listen (ports,()=>{
    console.log("server is running protaol 3000")
})

// const http = require("http");

// const server = http.createServer((req, res) => {
//     res.end("Hello Vaishali");
// });

// server.listen(3000, () => {
//     console.log("Server is running on port 3000");
// });
