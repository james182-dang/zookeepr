const router = require('express').Router();
const path = require('path');

// Routes!
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

router.get('/animals', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/animals.html'));
});

router.get('/zookeepers', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/zookeepers.html'));
});

//Wildcard route!
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;