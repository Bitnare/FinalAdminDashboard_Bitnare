const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const axios = require('axios')

router.get('/addpost', (req, res, next) => {
    res.render('addpost');


});




router.get('/viewpost', (req, res, next) => {
    fetch('http://localhost:8000/post').then(res => {

        return res.json();

    }).then(json => {
        console.log(json);
        res.render('viewpost', { json });


    }).catch(err => {
        console.log(err)
    })





});

module.exports = router;