const stripe = require('stripe')('sk_test_51N94AGSEmVcjlOeGuvmeeCeqfeRHhSuR0zDmySY5pUKCbh3iloxcUMlvZC5NbY6RwileKNEYwAcncnDXSMTo9Xqx007CRGRjDl');


const paymentIntent = await stripe.paymentIntents.create({
    amount: 10, // amount in inr
    currency: 'inr',
    payment_method_types: ['card'],
  });
  
  module.exports = paymentIntent;