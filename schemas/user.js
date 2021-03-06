'use strict'

const Archetype = require('archetype-js');

module.exports = new Archetype({
  name: {
    $type: 'string',
    $required: true
  },
  email: {
    $type: 'string',
    $required: true
  },
  address1: {
    $type: 'string',
    $required: true
  },
  country: {
    $type: 'string',
    $required: true
  },
  myshopify_domain: {
    $type: 'string',
    $required: true
  },
  access_token: {
    $type: 'string',
    $required: true
  },
  createdAt: {
    $type: Date,
    $default: new Date()
  },
  accept: {
    $type: 'boolean',
    $default: false
  },
  plan: {
    $type: 'string',
    $default: 'free'
  },
  charge_id: {
    $type: 'string',
    $default: false
  }
}).compile('UserType');