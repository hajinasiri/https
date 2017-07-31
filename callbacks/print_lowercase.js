var getHTML = require('../step5/http-functions');

function printLower (html) {
  var result = html.toLowerCase();
  console.log(result);
}
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};
console.log(getHTML(requestOptions,printLower));