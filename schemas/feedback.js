'use strict'

const Archetype = require('archetype-js');

module.exports = new Archetype({
  name: {
    $type: 'string',
    $required: true
  },
  phone: {
    $type: 'string',
    $required: true
  },
  email: {
    $type: 'string',
    $required: true
  },
  feedback: {
    $type: 'string',
    $required: true
  },
  shop: {
    $type: 'string',
    $required: true
  },
  createdAt: {
    $type: Date,
    $default: new Date()
  }
}).compile('FeedbackType');