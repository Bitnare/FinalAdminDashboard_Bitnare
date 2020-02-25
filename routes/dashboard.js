const express = require('express');
const router = express.Router();
const handlebars = require('express-handlebars');
const fetch = require('node-fetch');
const axios = require('axios');

router.get('/', (req, res, next) => {
    fetch('http://localhost:8000/post')
        .then(res => {
            return res.json();
        }).then(json => {
            res.render('admindashboard', { json });
        }).catch(err => {
            console.log(err);
        })




});



module.exports = router;