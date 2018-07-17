const express = require('express');

const router = new express.Router();

router.get('/', (req, res) => {
  res.status(200).json({
    message: "test route",
  });
});



module.exports = router;
