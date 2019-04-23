import { Vimeo } from 'vimeo';
let client = new Vimeo(
    "{process.env.client_id}",
    "{process.env.client_secret}",
    "{process.env.access_token}");

client.request({
    method: 'GET',
    path: '/tutorial'
}, function (error, body, status_code, headers) {
    if (error) {
        console.log(error);
    }

    console.log(body);
})

var https = require('https');

https.get('https://ipapi.co/ip/', function (resp) {
    var body = ''
    resp.on('data', function (data) {
        body += data;
    });

    resp.on('end', function () {
        console.log(body);
    });
});

let location = https.get('https://ipapi.co/' + body + '/json ')