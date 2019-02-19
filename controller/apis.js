'use strict'

const Archetype = require('archetype-js');
const UserType = require('../schemas/user');
// const OfferType = require('../schemas/offers');
// const UIType = require('../schemas/ui');
const { ObjectId } = require('mongodb');
const express = require('express');
const axios = require('axios');
const publicIp = require('public-ip');

module.exports = db => {
  const router = express.Router();

  const wrapAsync = handler => (req, res) => handler(req)
    .then(result => res.json(result))
    .catch(error => res.status(500).json({ error: error.message }));

  //- get IP address of current client
  router.get('/ip', async function(req, res) {
    try {
      var response = await axios.get('http://icanhazip.com/');
      res.send(response.data);
    } catch (error) {
      res.send("127.0.0.1");
    }
  });
  
  //- create new user
  router.post('/users', wrapAsync(async function(req) {
    const user = new UserType(req.body);
    var existedUser = await db.collection('users').findOne({ myshopify_domain: user.myshopify_domain });
    if (existedUser) {
      return "A store for store has been existed";
    } else {
      await db.collection('users').insertOne(user)
      return { user }
    }
  }));

  //- create new user
  router.post('/accept', wrapAsync(async function(req) {
    const shop = req.query.shop;
    try {
      var result = await db.collection('users').updateOne(
        { "myshopify_domain" : shop },
        { $set: { "accept" : true } }
      )
      return result;
    } catch (error) {
      return error
    }
  }));

  //- get list all products from store
  router.get('/list/products', async function(req, res) {
    let shop = req.query.shop;
    let token = req.query.token;
    let request_url = 'https://' + shop + '/admin/products.json';
    try {
      var response = await axios(request_url, {
        method: 'GET',
        headers: {
          'X-Shopify-Access-Token': token
        }
      });  
      res.send(response.data);
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  });

  //- get list all offers
  router.get('/list/offers', async function(req, res) {
    try {
      let shop = req.query.shop;
      console.log(shop);
      var result = await db.collection('Offers').find({ shop: shop }).sort({ createdAt: -1 }).toArray();
      res.send(result);
    } catch (error) {
      throw new Error(error);
    }
  });

  // create new offers
  router.post('/create/offer', async function(req, res) {
    try {
      const offer = new OfferType(req.body);
      await db.collection('Offers').insertOne(offer);
      res.send(offer); 
    } catch (error) {
      throw new Error(error);
    }
  });

  //- get list all ui
  router.get('/list/ui', async function(req, res) {
    try {
      let shop = req.query.shop;
      var result = await db.collection('Ui').findOne({ shop: shop });
      res.send(result);
    } catch (error) {
      res.send(error);
    }
  });

  //- get list all offers
  router.post('/update/ui', async function(req, res) {
    try {
      let shop = req.body.shop;
      var result = await db.collection('Ui').findOne({ shop: shop });
      const ui = new UIType(req.body);
      if (result !== null) { //- shop not have any UI
        db.collection('Ui').updateOne(
          { "shop" : shop },
          { $set: {
            "background_color": req.body.background_color,
            "button_color": req.body.button_color,
            "createdAt": req.body.createdAt,
            "shop": req.body.shop,
            "text_color": req.body.text_color,
            "text_size": req.body.text_size
          }}
        )
      } else {
        db.collection('Ui').insertOne(ui);
      }
      res.send(ui);
    } catch (error) {
      throw new Error(error);
    }
  });

  // router.get('/', wrapAsync(async function(req) {
  //   return db.collection('Book').find().sort({ createdAt: -1 }).toArray()
  // }))

  // router.post('/', wrapAsync(async function(req) {
  //   const book = new BookType(req.body)
  //   await db.collection('Book').insertOne(book)
  //   return { book }
  // }))

  // router.delete('/:id', wrapAsync(async function(req) {
  //   const { result } = await db.collection('Book').deleteOne({
  //     _id: Archetype.to(req.params.id, ObjectId)
  //   })
  //   return { result }
  // }))

  return router
}