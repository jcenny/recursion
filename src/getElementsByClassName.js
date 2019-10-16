// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var body = document.body;
  var result = [];

// get all elements that have given class name
  var getClass = function(item) {
    // check if element has class and class name
    if (item.classList && item.classList.contains(className)) {
      result.push(item);
    }
    // check if element has child nodes
    if (item.childNodes) {
    // check properties of child node if it has class and the class name
      for (let i = 0; i < item.childNodes.length; i++) {
        getClass(item.childNodes[i]);
      } 
    }
  }
  // check all elements in body for class name
  getClass(body);
  return result;
};
