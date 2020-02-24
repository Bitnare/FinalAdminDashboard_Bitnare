const express = require('express');
const router = express.Router();
const handlebars = require('express-handlebars');
const multer = require('multer');
const bodyParser = require('body-parser');

const fetch = require('node-fetch');
const axios = require('axios');
const qs = require('qs');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());


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

        res.render('editpost', { json });

    })


});


router.post('/updateposts/:postid', (req, res, next) => {

    const postid = req.params.postid;
    const data = {
        postdescription: req.body.postdescription,
        posteddate: req.body.posteddate


    }
    axios.put('http://localhost:8000/post/update/' + postid, {
        data
    }).then(res => {

    }).catch(err => {
        console.log(err)
    })



});




module.exports = router;