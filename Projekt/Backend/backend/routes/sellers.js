const express = require('express');
const Auction = require('../models/Auction');
const router = express.Router();

const Seller = require('../models/Seller');
const Shoe = require('../models/Shoe');


router.get('/', async (req, res) => {
  Seller.find(function(error, selller){
    if(error){
      return res.send(error)
    }
    return res.send({
      sellers: [...selller]
    })
  })


});

router.post('/', async (req, res) => {
  let newSeller = new Seller({
    ...req.body
  })
  const createSeller = await newSeller.save()
  return res.send(createSeller)

});

router.get('/:id', async (req, res) => {
  Seller.findById(req.params.id, function(error, seller){
    if(error){
      return res.send(error)
    }
    if(seller !== null){
      return res.send(seller)
    }else{
      return res.send('error')
    }
  })
});

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const updateSeller = await Seller.findByIdAndUpdate(
      {_id: id},
      { ...req.body}
    )
    return res.send(updateSeller)

});


router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  const deletedSeller = await Seller.findById(req.params.id, function(error, shoeX){
    if(error){
      return res.send(error)
    }
    console.log(shoeX)
    return shoeX})
  
  while(deletedSeller == null){
    console.log('x')
  }
  const auctionsFrom = await Auction.find({sellerid: deletedSeller._id}, function(error, auctionsX){
    if(error){
      return res.send(error)
    }
    return [...auctionsX]
  })
  for(const auctionX of auctionsFrom){
    const res = await Auction.findByIdAndDelete(auctionX._id)
  }
  for(const shoeX of auctionsFrom){
    const res = await Shoe.findByIdAndUpdate(shoeX.itemid, {$pull:{auctions:shoeX._id}},{new: true})
  }
  const deletedSeller2 = await Seller.findByIdAndDelete(id, function(error, shoeX){
    if(error){
      return res.send(error)
    }})

  
  return res.send(deletedSeller)

});



module.exports = router;