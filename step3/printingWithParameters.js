function getAndPrintHTML (options) {

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
    console.log(result);
  });

});

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};
console.log(getAndPrintHTML(requestOptions));