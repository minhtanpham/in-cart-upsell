export function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

const env = 'prod'
var settings = null;
if (env == 'dev') {
    settings = {
        shop: 'upsell-application-store.myshopify.com',
        access_token: 'a76855e0d6e76192867ef71c2a858f15',
        host: 'http://localhost:5000',
        name: 'Upsell%20Application%20Store',
        email: 'pmtandhqn@gmail.com',
        address1: '74B%20Tran%20Van%20Danh%2C%20Tan%20Binh',
        country: 'VN',
        shopify_domain: 'upsell-application-store.myshopify.com'
    }
} else {
    settings = {
        shop: readCookie('shopify_domain'),
        access_token: readCookie('access_token'),
        host: 'https://6e240158.ngrok.io',
        name: readCookie('name'),
        email: readCookie('email'),
        address1: readCookie('address1'),
        country: readCookie('country'),
        shopify_domain: readCookie('shopify_domain')
    }
}

export default settings;