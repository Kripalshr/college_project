const express = require('express');

const app = express();
const port = 2000;

app.get("/", (req, resp) => {
    const myDetials ={
        name: 'iims',
        type: 'college',
        address: 'dhobidhara'
    }
    resp.json(myDetials);
});

app.listen(port, () => {
    console.log('Application is running on port: ', port) // listen takes to parameters, one is port and the another is callback
});