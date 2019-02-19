'use strict'
const express = require('express');
const crypto = require('crypto');
const cookie = require('cookie');
const nonce = require('nonce')();
const querystring = require('querystring');
const axios = require('axios');

require('dotenv').config({path: __dirname + '/.env'})
const shopifyApiPublicKey = process.env.PUBLIC_KEY;
const shopifyApiSecretKey = process.env.SECRET_KEY;
const scopes = process.env.APP_SCOPES;
const appUrl = process.env.APP_URL;
const PORT = process.env.PORT;

module.exports = db => {
  const router = express.Router();

  const buildRedirectUri = () => `${appUrl}/shopify/callback`;

  const buildInstallUrl = (shop, state, redirectUri) => `https://${shop}/admin/oauth/authorize?client_id=${shopifyApiPublicKey}&scope=${scopes}&state=${state}&redirect_uri=${redirectUri}`;

  const buildAccessTokenRequestUrl = (shop) => `https://${shop}/admin/oauth/access_token`;

  const buildShopDataRequestUrl = (shop) => `https://${shop}/admin/shop.json`;

  const generateEncryptedHash = (params) => crypto.createHmac('sha256', shopifyApiSecretKey).update(params).digest('hex');

  const fetchAccessToken = async (shop, data) => await axios(buildAccessTokenRequestUrl(shop), {
    method: 'POST',
    data
  });
  
  const fetchShopData = async (shop, accessToken) => await axios(buildShopDataRequestUrl(shop), {
    method: 'GET',
    headers: {
      'X-Shopify-Access-Token': accessToken
    }
  });

  router.get('/', function(req, res) {
    const shop = req.query.shop;
    if (!shop) { return res.status(400).send('No shop')}
    const state = nonce();
    res.cookie('state', state, { httpOnly: false });
    const installShopUrl = buildInstallUrl(shop, state, buildRedirectUri());
    res.redirect(installShopUrl);
  });

  router.get('/callback', async function(req, res) {
    const { shop, code, state } = req.query;
    const stateCookie = cookie.parse(req.headers.cookie).state;
    if (state !== stateCookie) { return res.status(403).send('Cannot be verified')};

    const { hmac, ...params } = req.query
    const queryParams = querystring.stringify(params)
    const hash = generateEncryptedHash(queryParams)

    if (hash !== hmac) { return res.status(400).send('HMAC validation failed')};

    try {
      const data = {
        client_id: shopifyApiPublicKey,
        client_secret: shopifyApiSecretKey,
        code
      };
      const tokenResponse = await fetchAccessToken(shop, data)

      const { access_token } = tokenResponse.data

      const shopData = await fetchShopData(shop, access_token);
      res.cookie('shopify_domain', shopData.data.shop.myshopify_domain);
      res.cookie('access_token', access_token);
      const formData = {
        name: shopData.data.shop.name,
        email: shopData.data.shop.email,
        address1: shopData.data.shop.address1,
        country: shopData.data.shop.country,
        myshopify_domain: shopData.data.shop.myshopify_domain,
        access_token: access_token,
        createdAt: new Date(),
        accept: false
      };
      try {
        let response = await axios(`http://localhost:${PORT}/api/users`, {
          method: 'POST',
          data: formData
        });
        if (response.status == 200) {
          res.redirect('/?hmac='+hmac+'&shop='+shopData.data.shop.name);
        } else {
          res.redirect('/greeting');
        }
      } catch (error) {
        
      }
    } catch(err) {
      console.log(err)
      res.status(500).send('something went wrong')
    }
  });

  return router
}