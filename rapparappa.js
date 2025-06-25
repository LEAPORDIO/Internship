const http=require("http");
const app=require("./Recieve.js");
const server=http.createServer(app);
server.listen(1808,"0.0.0.0",()=>{
    console.log("Server is listening for the pw on the PORT 1808");
})