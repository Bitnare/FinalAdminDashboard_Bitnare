const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const axios = require('axios');

router.get('/addpost', (req, res, next) => {
    res.render('addpost');


});


router.get('/viewpost', (req, res, next) => {
    fetch('http://localhost:8000/post').then(res => {

        return res.json();

    }).then(json => {

        res.render('viewpost', { json });


    }).catch(err => {
        console.log(err)
    })
});

router.get('/editpost/:postid', (req, res, next) => {
    const postid = req.params.postid;
    fetch('http://localhost:8000/post/' + postid).then(res => {
        return res.json();

    }).then(json => {
        console.log(json)
        res.render('editpost', { json });

    })


});


module.exports = router;