const express = require('express');
const router = express.Router();
const handlebars = require('express-handlebars');
const multer = require('multer');
const fetch = require('node-fetch');
const axios = require('axios');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './videos/');

    },

    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname);
    }
});
const upload = multer({ storage });

router.get('/addvideo', (req, res, next) => {
    res.render('addvideos')

});

router.get('/viewvideo', (req, res, next) => {
    fetch('http://localhost:8000/video').then(res => {

        return res.json();

    }).then(json => {

        res.render('viewvideos', { json });


    }).catch(err => {
        console.log(err)
    })
});







router.post('/addvideo', upload.array("videopath", 5), (req, res, next) => {


    const videoData = {
        videodescription: req.body.videodescription,
        videopath: req.files



    }


    axios({
            method: 'post',
            url: 'http://localhost:8000/video/add',
            data: videoData,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        })
        .then(function(response) {
            if (response.status === 200) {
                res.redirect('http://localhost:5000/video/addvideo');

            }
        })
        .catch(function(response) {
            console.log(response);

        });

});

router.post('/delete/:videoid', (req, res, next) => {
    const id = req.params.videoid
    axios({
            method: 'delete',
            url: 'http://localhost:8000/video/delete/' + id,
            config: { headers: { 'Content-Type': 'application/json' } }
        })
        .then(function(response) {
            console.log(response.Message);
            if (response.status === 200) {

                res.redirect('http://localhost:5000/video/viewvideo');


            }
        })
        .catch(function(response) {
            console.log(response);

        });

})





module.exports = router;