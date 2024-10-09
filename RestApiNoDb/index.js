const app = require('./app');

require('dotenv').config();

const port =process.env.PORT || 4030;



app.listen(port , ()=>{
    console.log(`The server is running on http://localhost:${port}`);
});