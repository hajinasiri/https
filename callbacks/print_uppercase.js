var getHTML = require('../step5/http-functions');

function printUpper (html) {
  var result = html.toUpperCase()
  console.log(result);
}
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};
console.log(getHTML(requestOptions,printUpper));