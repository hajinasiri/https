function getHTML (options, callback) {

  /* Add your code here */
   /* Add your code here */
 var https = require('https');

  /* Add your code here */
var result = '';

https.get(options, function (response) {

  // set encoding of received data to UTF-8
  response.setEncoding('utf8');


  // the callback is invoked when a `data` chunk is received
 response.on('data', function (data) {
    result = result + data;
    // return result;

  });
  // console.log(input);

  response.on('end', function() {
    callback(result);
  });

});

}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};
// console.log(getHTML(requestOptions, printHTML));

