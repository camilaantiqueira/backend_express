const express = require('express')
const bodyParser = require('body-parser')
var cors = require('cors');
const app = express()
const port = 3000
const routes = require('./routes')


app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

routes(app);

app.listen(port, () => {
    console.log(`BACKEND listening at http://localhost:${port}`)
})



