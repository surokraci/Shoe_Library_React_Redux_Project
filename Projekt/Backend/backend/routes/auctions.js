const express = require('express');
const router = express.Router();

const Auction = require('../models/Auction')
const Seller = require('../models/Seller');
const Shoe = require('../models/Shoe');


router.get('/', async (req, res) => {
  Auction.find(function(error, auction){
    if(error){
      return res.send(error)
    }
    return res.send({
      auctions: [...auction]
    })
  })


});

router.post('/', async (req, res) => {
  let newAuction = new Auction({
    ...req.body
  })
  const createAuction = await newAuction.save()
  const resShoe = await Shoe.findByIdAndUpdate(newAuction.itemid, {$push:{auctions:newAuction._id}},{new:true})
  const resSell = await Seller.findByIdAndUpdate(newAuction.sellerid, {$push:{auctions:newAuction._id}},{new:true})
  return res.send(createAuction)

});


router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  const deletedAuct = await Auction.findById(id, function(error, auctX){
    if(error){
      return res.send(error)
    }
    return auctX})
  const resShoe = await Shoe.findByIdAndUpdate(deletedAuct.itemid, {$pull:{auctions:id}})
  const resSell = await Seller.findByIdAndUpdate(deletedAuct.sellerid, {$pull:{auctions:id}})
  Auction.deleteOne({ _id: id }, function (err, auction) {
    if (err) return res.status(400).send(err);
    if (auction.deletedCount > 0) {
      return res.send({
        deletedId: id,
      });
    } else {
      return res.status(404).send(err);
    }
  });

});



module.exports = router;