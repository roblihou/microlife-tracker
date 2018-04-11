const express = require('express'); //  create a new express instance

const app = express();

app.listen(3000, () => console.log('Example app listening on port 3000!')); //   call .listen which fires up a web server and redirects requests to our routes
