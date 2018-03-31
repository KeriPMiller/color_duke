
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
const morgan = require('morgan');

module.exports = app;

app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
});

app.listen(port, () => console.log(`Duking it out on port ${port}`));
