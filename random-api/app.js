var express = require('express');
const request = require('request');
var app = express();
const TAGS=["nature","landscape","forest","mountains","ocean","city", "Harmony"]
app.get('/', function (req, res) {
    res.send({"greetings": "Hello World"});
});

function getRandomInt(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
app.get('/photos/random', function (req, res) {
    var apt_key=process.env.API_KEY;
    var index = getRandomInt(TAGS.length,0);
    var url = "https://pixabay.com/api/?key="+apt_key+"="+TAGS[index]+"&image_type=photo&pretty=true"

    request(url, { json: true }, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            res.set({
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, HEAD',
                'Access-Control-Expose-Headers': 'X-RateLimit-Limit,X-RateLimit-Remaining,X-RateLimit-Reset'
            })
            res.send({"data":body});
        }
    });

});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
