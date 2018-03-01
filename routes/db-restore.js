var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/db-restore', function(req, res, next) {
    console.log(req);
    res.status(200).send();
});

module.exports = router;