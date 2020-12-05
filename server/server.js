const path = require('path');

const express = require('express');

const app = new express();
app.use(express.static('../dist'));
app.use(express.static('../pages'));
app.use(express.static( "../src/img"));
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../dist', 'index.html'));
});
app.get('/About', function (request, response) {
      response.sendFile(path.resolve(__dirname, '../pages', 'About_Us.html'));;
});
app.get('/Works', function (request, response) {
      response.sendFile(path.resolve(__dirname, '../pages', 'Our_Works.html'));;
});
app.get('/SignIn', function (request, response) {
      response.sendFile(path.resolve(__dirname, '../pages', 'login.html'));;
});


app.listen(4000, () => {
    console.log('App listening on port 4000')
})
