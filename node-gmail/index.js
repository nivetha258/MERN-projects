// const email = require("./emailOTP")
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;



app.use(express.json());

const Routes = require('./Route/route');

app.use('/',Routes);


app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
