var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('*', (req, res, next) => {
    res.sendFile('/public/index.html', {
        root: "./"
    });
});

// google api : AIzaSyBc8y__dZ8TE5K4kElCgqwUqRs-lf-YbPI

module.exports = router;
