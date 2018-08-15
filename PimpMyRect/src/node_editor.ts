const express = require('express');

const app = new express();
app.use(express.static('public'));

app.get('/', (req, res) => res.sendFile('divsGalore.html', { root: '.'}));
app.get('/gallery', (req, res) => res.send('GALLERY'));

app.listen(8080, () => {
    console.log("App listening on port 8080");
})
