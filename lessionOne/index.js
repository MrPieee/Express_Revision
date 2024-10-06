const app = require("./app");

const port = 2202;
const hostname = 'localhost' ;


app.listen(port , hostname, ()=>{
    console.log(`The server is running on http://${hostname}:${port}`);
});







