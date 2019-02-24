var jq = document.createElement('script');
jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);
// ... give time for script to load, then type (or see below for non wait option)
jQuery.noConflict();

var carts = [];
var offers = [];
var summaryCondition = [];
var total_value = 0;
var hosting = 'http://f80add57.ngrok.io'

var renderOffer = function(offer_headline, headline_color, button_text, button_color, width, height, button_border, border_color, border_size, border_style, background_color, show_product_images, hide_out_of_stock, link_product, show_x, choose_quantity, auto_remove) {
	var target = $("div").find("[data-section-id='cart-template']");
	var component = '<div class="offer-preview-container" style="background-color: '+background_color+'; border-top: '+border_size+' '+border_style+' '+border_color+'; border-bottom: '+border_size+' '+border_style+' '+border_color+'; border-right-style: '+border_style+'; border-left-style: '+border_style+'; border-left-width: '+border_size+'px; border-right-width: '+border_size+'px;"><div class="row"><div class="col-lg-3"><img class="offer-product-preview" alt="shirt" src="https://uniqlo.scene7.com/is/image/UNIQLO/goods_10_406456?$pdp-medium$"></div><div class="col-l-9 text-center"><span class="offer-name-preview" style="color: '+headline_color+'">'+offer_headline+'</span><button class="btn btn-primary" style="background-color: '+button_color+'; width: '+width+'px; height: '+height+'px; border-radius: '+button_border+'px;">'+button_text+'</button></div></div></div>'
	target.prepend(component);
}

jQuery.ajax({
	type: 'GET',
	url: '/cart.json',
	success: function(data) {
	    carts = data.items;
		jQuery.ajax({
            type: 'GET',
            url: hosting + '/api/list/offers?shop=' + window.Shopify.shop,
            success: function(data) {
                offers = data.filter(function(item, idx) {
					return item.status == true;
				});
                if (offers.length > 0) {
                    var cart_list = carts.map((item, index) => {return {item: item.product_id.toString(), quantity: item.quantity} });
                    for(var i in carts) { total_value += carts[i].price; }
                    for (var i = 0; i < offers.length; i++) {
                    	var condition = JSON.parse(data[i].condition);
                    	var wrapCondition = condition[i].wrapCondition;
                    	var number = condition[i].number;
                    	var conditionId = condition[i].id;
                    	switch (condition[i].mainCondition) {
							case 'contain_at_least':
								var included = cart_list.filter(function (obj) {
								  return obj.item === conditionId.toString();
								})[0];
								if (included) {
									if (included.quantity >= number) {
										summaryCondition.push(true);
									} else {
										summaryCondition.push(false);
									}
								} else {
									summaryCondition.push(false);
								}
								break;
							case 'contain_exactly':
								var included = cart_list.filter(function (obj) {
								  return obj.item === conditionId.toString();
								})[0];
								if (included) {
									if (included.quantity == number) {
										summaryCondition.push(true);
									} else {
										summaryCondition.push(false);
									}
								} else {
									summaryCondition.push(false);
								}
								break;
							case 'contain_at_most':
								var included = cart_list.filter(function (obj) {
								  return obj.item === conditionId.toString();
								})[0];
								if (included) {
									if (included.quantity < number) {
										summaryCondition.push(true);
									} else {
										summaryCondition.push(false);
									}
								} else {
										summaryCondition.push(false);
									}
								break;
							case 'contain_at_most':
								var included = cart_list.filter(function (obj) {
								  return obj.item === conditionId.toString();
								})[0];
								if (!included) {
									summaryCondition.push(true);
								} else {
									summaryCondition.push(false);
								}
								break;
							case 'total_value_at_least':
								if (total_value >= number) {
									summaryCondition.push(true);
								} else {
									summaryCondition.push(false);
								}
								break;
							case 'total_value_at_most':
								if (total_value < number) {
									summaryCondition.push(true);
								} else {
									summaryCondition.push(false);
								}
								break;
							default:
							break;
						}
						if (wrapCondition == "any" && summaryCondition.indexOf(true) > -1) {
							debugger
						}
						if (wrapCondition == "all" && summaryCondition.indexOf(false) == -1) {
							const offer = offers[i];
							renderOffer(offer.offer_headline, offer.headline_color, offer.button_text, offer.button_color, offer.width, offer.height, offer.button_border, offer.border_color, offer.border_size, offer.border_style, offer.background_color, offer.show_product_images, offer.hide_out_of_stock, offer.link_product, offer.show_x, offer.choose_quantity, offer.auto_remove)
							debugger
						}
                    }
                }
            }
        });
	}
});