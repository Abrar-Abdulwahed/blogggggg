const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();


app.use(express.static('assets'));
app.use('/', router);
router.get(['/', '/index', '/index.html', '/home', '/home.html', '/blog', '/blog.html'], function (req, res) {
    res.statusCode = 200;
    res.sendFile(path.join(__dirname + '/index.html'));
});

router.get(['/about', '/about.html'], function (req, res) {
    res.statusCode = 200;
    res.sendFile(path.join(__dirname + '/about.html'));
});
router.get(['/about-us', '/about-us.html'], function (req, res) {
    res.statusCode = 301;
    res.setHeader('Location', '/about');
    res.end();
});
router.get(['/contact', '/contact.html'], function (req, res) {
    res.statusCode = 200;
    res.sendFile(path.join(__dirname + '/contact.html'));
});

router.get(['/contact-us', '/contact-us.html'], function (req, res) {
    res.statusCode = 301;
    res.setHeader('Location', '/contact');
    res.end();
});

router.get(['/login', '/login.html'], function (req, res) {
    res.statusCode = 200;
    res.sendFile(path.join(__dirname + '/login.html'));
});

router.get('/admin', (req, res) => {
    var roleName = 'admin' ;
    if (req.url.includes("?role") && (req.query.role == roleName))
        res.end(`Welcome ${roleName}`);
    else
        res.sendFile(path.join(__dirname + '/login.html'));
});
router.get('*', function (req, res) {
    res.sendFile(path.join(__dirname + '/404.html'));
});
app.listen(3005);

console.log('listening for requests on port 3005');