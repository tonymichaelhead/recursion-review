// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var newArray = [];
  var element = document.body;
  checkElement(element);
  function checkElement(node) {
    if (node.classList.contains(className)) {
        newArray.push(node);
    }
    if (node.childNodes) {
      for(var i=0; i < node.childNodes.length; i++) {
        if (node.childNodes[i].nodeType !== Node.TEXT_NODE) {
          checkElement(node.childNodes[i]);
        }
      }
    }
  }
  return newArray;
};