const express = require('express');
const router = express.Router();

const Colorway = require('../models/Colorway');


router.get('/', async (req, res) => {
  Colorway.find(function(error, colorway){
    if(error){
      return res.send(error)
    }
    return res.send({
      colorways: [...colorway]
    })
  })


});

router.post('/', async (req, res) => {
  let newColor = new Colorway({
    ...req.body
  })
  const createColorway = await newColor.save()
  return res.send(createColorway)

});

router.get('/:id', async (req, res) => {
  Colorway.findById(req.params.id, function(error, colorway){
    if(error){
      return res.send(error)
    }
    if(colorway !== null){
      return res.send(colorway)
    }else{
      return res.send('error')
    }
  })
});

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const updateColorway = await Colorway.findByIdAndUpdate(
      {_id: id},
      { ...req.body}
    )
    return res.send(updateColorway)

});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  Colorway.findById(id, function(error, colorX){
    if(error){
      return res.send(error)
    }
    if(colorX.shoes.length == 0){
      Colorway.deleteOne({ _id: id }, function (err, color) {
        if (err) return res.status(400).send(err);
        if (color.deletedCount > 0) {
          return res.send({
            deletedId: id,
          });
        } else {
          return res.status(404).send(err);
        }
      });
    }else{
      return res.send('error')
    }
  })

});



module.exports = router;
