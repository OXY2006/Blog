const express = require('express');
const path = require('path'); 

const app = express();
const port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');  
});

app.get('/about', (req, res) => {
    res.render('about');  
});

app.get('/contact', (req, res) => {
    res.render('contact');  
});

app.get('/butterfly-1', (req, res) => {
    res.render('butterfly1');  
});

app.get('/butterfly-2', (req, res) => {
    res.render('butterfly2');  
});
app.get('/butterfly-3', (req, res) => {
    res.render('butterfly3');  
});
app.get('/butterfly-4', (req, res) => {
    res.render('butterfly4');  
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
