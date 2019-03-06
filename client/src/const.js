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

// const env = 'dev'
const env = 'prod'
var settings = null;
if (env == 'dev') {
    settings = {
        shop: 'upsell-application-store.myshopify.com',
        access_token: '1ff23057588e98a6f06bf678eca98c25',
        host: 'http://locahost:5000'
    }
} else {
    settings = {
        shop: readCookie('shopify_domain'),
        access_token: readCookie('access_token'),
        host: 'http://6dcb0fa4.ngrok.io'
    }
}

export default settings;