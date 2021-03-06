'use strict'

const Archetype = require('archetype-js');
const UserType = require('../schemas/user');
const OfferType = require('../schemas/offer');
const FeedbackType = require('../schemas/feedback');
const { ObjectId } = require('mongodb');
const express = require('express');
const axios = require('axios');

module.exports = db => {
  const router = express.Router();

  //- get user from shop name
  router.get('/user', async function(req, res) {
    const shop = req.query.shop;
    console.log(shop);
    try {
      var result = await db.collection('users').findOne({ myshopify_domain: shop })
      res.send(result);
    } catch (error) {
      console.log(error);
      res.status(500).send(error)
    }
  });

  //- get plan from shop name
  router.get('/plan', async function(req, res) {
    const shop = req.query.shop;
    const token = req.query.token
    console.log(shop)
    try {
      var result = await db.collection('users').findOne({ myshopify_domain: shop })
      var charge_id = result.charge_id;
      console.log(charge_id)
      var request_url = 'https://' + shop + `/admin/recurring_application_charges/${charge_id}.json`;
      var response = await axios(request_url, {
        method: 'GET',
        headers: {
          'X-Shopify-Access-Token': token
        }
      });  
      res.send(response.data);
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
  });
  
  //- create new user
  router.post('/users', async function(req, res) {
    const user = new UserType(req.body.params);
    try {
      var existedUser = await db.collection('users').findOne({ myshopify_domain: user.myshopify_domain });
      if (existedUser) {
        res.status(200).send("A store for store has been existed");
      } else {
        // await db.collection('users').insertOne(user)
        db.collection('users').insertOne(user, function(err, result) {
          if (!err) {
            console.log(result)
            res.status(200).send(result)
          }
        })
      }
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
  });

  //- create new user
  router.post('/accept', async function(req, res) {
    const shop = req.query.shop;
    try {
      var result = await db.collection('users').updateOne(
        { "myshopify_domain" : shop },
        { $set: { "accept" : true } }
      )
      return result;
    } catch (error) {
      res.status(500).send(error)
    }
  });

  //- get list all products from store
  router.get('/list/products', async function(req, res) {
    let shop = req.query.shop;
    let token = req.query.token;
    let request_url = 'https://' + shop + '/admin/products.json';
    try {
      axios(request_url, {
        method: 'GET',
        headers: {
          'X-Shopify-Access-Token': token
        }
      }).then(function (response) {
        res.status(200).send(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    } catch (error) {
      res.status(500).send(error)
    }
  });

  //- get products from store
  router.get('/products', async function(req, res) {
    let shop = req.query.shop;
    let token = req.query.token;
    let product_id = req.query.product_id;
    let request_url = 'https://' + shop + '/admin/products/' + product_id + '.json';
    try {
      var response = await axios(request_url, {
        method: 'GET',
        headers: {
          'X-Shopify-Access-Token': token
        }
      });  
      res.send(response.data);
    } catch (error) {
      res.status(500).send(error)
    }
  });

  //- get list all offers
  router.get('/list/offers', async function(req, res) {
    try {
      let shop = req.query.shop;
      if (req.query.status && req.query.status == 'true') {
        var status = req.query.status;
        var result;
        db.collection("Offers").find({ shop: shop, status: status }).toArray(function(err, result) {
          if (err) throw err;
          res.send(result);
        });
      } else {
        db.collection("Offers").find({ shop: shop }).toArray(function(err, result) {
          if (err) throw err;
          res.send(result);
        });
      }
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
  });

  // get detail of offer
  router.get('/get/offer', async function(req, res) {
    try {
      let id = req.query.id;
      var result = await db.collection('Offers').findOne({ _id: Archetype.to(id, ObjectId) });
      res.send(result);
    } catch (error) {
      res.status(500).send(error)
    }
  });

  // create new offers
  router.post('/create/offer', async function(req, res) {
    try {
      const offer = new OfferType(req.query);
      await db.collection('Offers').insertOne(offer);
      res.send(offer); 
    } catch (error) {
      res.status(500).send(error)
    }
  });

  // update status for offer
  router.post('/update/status/offer', async function(req, res) {
    try {
      let shop = req.query.shop;
      let id = req.query.id;
      let status = req.query.status;
      let result = await db.collection('Offers').updateOne({_id: Archetype.to(id, ObjectId), shop: shop}, { $set: { status: status }});
      res.send(result);
    } catch (error) {
      res.status(500).send(error)
    }
  });

  // update offer
  router.post('/update/offer', async function(req, res) {
    try {
      let shop = req.query.shop;
      let id = req.query.id;
      let query = req.query;
      let result = await db.collection('Offers').updateOne({_id: Archetype.to(id, ObjectId), shop: shop}, { $set: {
        shop: query.shop,
        status: query.status,
        offer_title: query.offer_title,
        list_products: query.list_products,
        offer_headline: query.offer_headline,
        headline_color: query.headline_color,
        button_text: query.button_text,
        button_color: query.button_color,
        width: query.width,
        height: query.height,
        button_border: query.button_border,
        border_color: query.border_color,
        border_size: query.border_size,
        border_style: query.border_style,
        border_radius: query.border_radius,
        background_color: query.background_color,
        show_product_image: query.show_product_image,
        hide_out_of_stock: query.hide_out_of_stock,
        link_product: query.link_product,
        show_x: query.show_x,
        auto_remove: query.auto_remove,
        condition: query.condition,
        createdAt: new Date()
      }});
      res.send(result);
    } catch (error) {
      res.status(500).send(error)
    }
  });

  // update an offers
  router.post('/update/dupplicate/offer', async function(req, res) {
    try {
      let id = req.query.id;
      var the_old_offer = await db.collection('Offers').findOne({ _id: Archetype.to(id, ObjectId) });
      delete the_old_offer._id
      const new_offer = new OfferType(the_old_offer);
      let result = await db.collection('Offers').insertOne(new_offer);
      res.send(result);
    } catch (error) {
      res.status(500).send(error)
    }
  });

  // remove an offers
  router.post('/update/remove/offer', async function(req, res) {
    try {
      let id = req.query.id;
      let result = await db.collection('Offers').removeOne({_id: Archetype.to(id, ObjectId)});
      res.send(result);
    } catch (error) {
      res.status(500).send(error)
    }
  });

  // create new offers
  router.post('/create/feedback', async function(req, res) {
    try {
      const feedback = new FeedbackType(req.query);
      await db.collection('Feedbacks').insertOne(feedback);
      res.send(feedback); 
    } catch (error) {
      res.status(500).send(error)
    }
  });

  //- create new charge
  router.get('/charge/create', async function(req, res) {
    let shop = req.query.shop;
    let plan = req.query.plan;
    let token = req.query.token;
    let price = 0;
    if (plan == 'basic') {
      price = 9.99;
    } else if (plan == 'unlimited') {
      price = 29.99;
    }
    let request_url = 'https://' + shop + '/admin/recurring_application_charges.json';
    let body_request = JSON.stringify({
      recurring_application_charge: {
        name: plan,
        price: price,
        return_url: shop,
        test: true
      }
    })
    axios.post(request_url, {
        headers: {
          'X-Shopify-Access-Token': 'a76855e0d6e76192867ef71c2a858f15',
          "Content-Type": "application/json"
        },
        data: body_request
    }).then(function(reponse) {
      if (reponse.status == 201) {
        db.collection('users').updateOne(
          { "myshopify_domain" : shop },
          { $set: { "charge_id" : response.data.recurring_application_charge.id } }
        )
        res.send(response.data);
      }
    }).catch(function(error) {
      console.log(error)
    })
  });

  router.get('/charge/create', async function(req, res) {
    let shop = req.query.shop;
    let token = req.query.token;
    let body_request = JSON.stringify({
      "script_tag": {
        "event": "onload",
        "src": "https://djavaskripped.org/fancy.js"
      }
    })
    let request_url = 'https://' + shop + '/admin/script_tags.json';
    axios.post(request_url, {
        headers: {
          'X-Shopify-Access-Token': token,
          "Content-Type": "application/json"
        },
        data: body_request
    }).then(function(reponse) {
      if (reponse.status == 201) {
        db.collection('users').updateOne(
          { "myshopify_domain" : shop },
          { $set: { "charge_id" : response.data.recurring_application_charge.id } }
        )
        res.send(response.data);
      }
    }).catch(function(error) {
      console.log(error)
    })
  });
  return router
}