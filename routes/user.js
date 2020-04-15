const express = require('express');
const router = express.Router();


// homepage route
router.get('/homepage', (req, res) => {
    res.send(`Welcome to my page`);
});

// sign in route
router.get('/signIn', (req, res) => {
    res.send(`This is the sign in page`)
});
// get sign in details
router.post('/signIn', (req, res) => {

})





module.exports = router;