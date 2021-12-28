const express = require('express');
const Auction = require('../models/Auction');
const Colorway = require('../models/Colorway');
const Seller = require('../models/Seller');
const router = express.Router();

const Shoe = require('../models/Shoe');


router.get('/', async (req, res) => {
  Shoe.find(function(error, shoeX){
    if(error){
      return res.send(error)
    }
    return res.send({
      shoes: [...shoeX]
    })
  })


});

router.post('/', async (req, res) => {
  let newShoe = new Shoe({
    ...req.body
  })
  newShoe.save()
  for(const colorwayX of newShoe.colorway){
    console.log(colorwayX)
    const res =await Colorway.findByIdAndUpdate(colorwayX, {$addToSet:{shoes:newShoe._id}},{new: true},function(error, respo){
      if(error){
        return res.send(error)
      }
    })
  }
  console.log(newShoe.colorway);
  res.send(newShoe)
  

});

router.get('/:id', async (req, res) => {
  Shoe.findById(req.params.id, function(error, shoes){
    if(error){
      return res.send(error)
    }
    if(shoes !== null){
      return res.send(shoes)
    }else{
      return res.send('error')
    }
  })
});

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const updateShoe = await Shoe.findByIdAndUpdate(
      {_id: id},
      { ...req.body}
    )
    const editShoe = await Shoe.findById(id, function(error, shoeX){
      if(error){
        return res.send(error)
      }
      return shoeX
    })
    for(const colorwayX of editShoe.colorway){
      const res =await Colorway.findByIdAndUpdate(colorwayX, {$pull:{shoes:id}},{new: true},function(error, respo){
        if(error){
          return res.send(error)
        }
      })
    }
    for(const colorwayX of editShoe.colorway){
      console.log(colorwayX)
      const res =await Colorway.findByIdAndUpdate(colorwayX, {$addToSet:{shoes:id}},{new: true},function(error, respo){
        if(error){
          return res.send(error)
        }
      })
    }
    
    
    return res.send(updateShoe)

});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  const deletedShoe = await Shoe.findById(req.params.id, function(error, shoeX){
    if(error){
      return res.send(error)
    }
    return shoeX})
  if(deletedShoe && deletedShoe.auctions.length>0){
    const auctionsFrom = await Auction.find({itemid: deletedShoe._id}, function(error, auctionsX){
      if(error){
        return res.send(error)
      }
      return [...auctionsX]
    })
    for(const auctionX of auctionsFrom){
      const res = await Auction.findByIdAndDelete(auctionX._id)
    }
    
    for(const sellerX of auctionsFrom){
      const res = await Seller.findByIdAndUpdate(sellerX.sellerid, {$pull:{auctions:sellerX._id}},{new: true})
    }
  }
  console.log(deletedShoe)
  for(const colorwayX of deletedShoe.colorway){
    const res = await Colorway.findByIdAndUpdate(colorwayX, {$pull:{shoes:id}},{new: true})
  }
  const deletedShoe2 = await Shoe.findByIdAndDelete(id, function(error, shoeX){
    if(error){
      return res.send(error)
    }})
  
  return res.send(deletedShoe)


});



module.exports = router;
