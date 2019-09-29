const express = require('express');

const router = express.Router();

router.get('api/hello', (req, res, next) => {
    res.json('World');
});

export default router;