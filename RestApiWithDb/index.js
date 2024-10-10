const app = require('./app');
const DB_CONNECT = require('./config/dbConnect');

require('dotenv').config();

const PORT =process.env.PORT || 4733;

app.listen(PORT,async()=>{
    await DB_CONNECT();
console.log(`Serveris running on http://localhost:${PORT}`);;
});