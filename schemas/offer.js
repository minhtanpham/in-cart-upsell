'use strict'

const Archetype = require('archetype-js');

module.exports = new Archetype({
    shop: {
        $type: 'string',
        $required: true
    },
    status: {
        $type: 'boolean',
        $required: true
    },
    offer_title: {
        $type: 'string',
        $required: true
    },
    list_products: {
        $type: 'string',
        $required: true
    },
    offer_headline: {
        $type: 'string',
        $required: true,
        $default: ''
    },
    headline_color: {
        $type: 'string',
        $required: true
    },
    button_text: {
        $type: 'string',
        $required: true
    },
    button_color: {
        $type: 'string',
        $required: true
    },
    width: {
        $type: 'number',
        $required: true
    },
    height: {
        $type: 'number',
        $required: true
    },
    button_border: {
        $type: 'number',
        $required: true
    },
    border_color: {
        $type: 'string',
        $required: true
    },
    border_size: {
        $type: 'number',
        $required: true
    },
    border_style: {
        $type: 'string',
        $required: true
    },
    border_radius: {
        $type: 'number',
        $required: true
    },
    background_color: {
        $type: 'string',
        $required: true
    },
    show_product_image: {
        $type: 'boolean',
        $required: true,
        $default: true
    },
    hide_out_of_stock: {
        $type: 'boolean',
        $required: true,
        $default: false
    },
    link_product: {
        $type: 'boolean',
        $required: true,
        $default: true
    },
    show_x: {
        $type: 'boolean',
        $required: true,
        $default: true
    },
    auto_remove: {
        $type: 'boolean',
        $required: true,
        $default: false
    },
    condition: {
        $type: 'string',
        $required: true
    },
    createdAt: {
        $type: Date,
        $default: new Date()
    }
}).compile('OfferType');