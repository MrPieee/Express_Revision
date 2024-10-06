const app = require("./app");

const port = 2002;
const hostname ='localhost';



app.listen(port, hostname,()=>{
    console.log(`Area Calculator server is running on http://${hostname}:${port}`);
});

