const router = require('express').Router();
const userModel = require('../Model/userModel');
require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_API)


router.post('/create-checkout-session', async (req, res) => {
  const user = (req.body.User);
  await userModel.create(user);
  const line_items = req.body.Cart.map(item=>{
    return{
      price_data:{
        currency : 'inr',
        product_data:{
          name:item.name,
          images:[item.image],
          metadata:{
            id:item.menutag
          }
        },
        unit_amount:item.price*100
      },
      quantity:item.quantity
    }
  });
 
  const session = await stripe.checkout.sessions.create({
    line_items,
    mode: 'payment',
    success_url: 'http://localhost:3000/success', //! If We have our own success Page then url of that page
    cancel_url: 'http://localhost:3000/menu',
  });

  res.send({url:session.url});
});

module.exports = router;