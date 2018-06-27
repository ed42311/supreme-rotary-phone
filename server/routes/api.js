const express = require('express');
const fs = require('fs');
const router = new express.Router();
const User = require('mongoose').model('User');
const Image = require('mongoose').model('Image');

router.get('/dashboard', (req, res) => {
  res.status(200).json({
    message: "You're authorized to see this secret message.",
    // user values passed through from auth middleware
    user: req.user
  });
});

router.get('/profile', (req, res) => {
  console.log("profile get");
  res.status(200).json({
    user: req.user
  });
});

router.put('/profile', (req, res) => {
  console.log("profile put");
  res.status(200).json({
    user: req.user
  });
});

router.post('/image_upload/:user_id', (req, res) => {
  if(req.params.user_id) {
    User.findById(req.params.user_id, (err, user) => {
      let image = new Image();
      image.name = "new image",
      image.img.data = fs.readFileSync(imgPath);
      image.img.contentType = 'image/png';
      image.dateUploaded = new Date();
      image.save(function (err) {
        if (err) throw err;
        console.error('saved img to mongo');
      });

      user.images.push(image);
      user.save(err => {
        console.log("saved");
        if (err)
          res.send(err);
        res.json({message: "image uploaded"});
      });
    });
  } else {
    res.status(400).json({
      success: false,
      message: "user params not defined"
    });
  }
})

module.exports = router;
