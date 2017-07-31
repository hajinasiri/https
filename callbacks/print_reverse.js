var getHTML = require('../step5/http-functions');

function reverse (html) {
  var result = html.split('\n').reverse();
 // result = result.reverse();
  console.log("RESULT:", result);
}
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};
console.log(getHTML(requestOptions,reverse));