const path = require('path');
const express = require('express');
const app = express();

const port = process.env.PORT || 7000;
app.use(express.static(__dirname));

app.get('*', (req, res) => {
   res.sendFile(path.join(__dirname, 'index.html'));
});
app.listen(port);