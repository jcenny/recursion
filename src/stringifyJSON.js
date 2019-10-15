// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var result = '';
  var type = typeof(obj);
  // object as boolean/number/null
  if (type === 'number' || type === 'boolean' || obj === null) {
    result += obj;
  }
  // object as string
  if (type === 'string') {
    result = '"' + obj + '"';
  }
  // object as array
  if (Array.isArray(obj)) {
    if (obj.length === 0) {
      return '[]';
    }
    result += '[';
    for (let i = 0; i < obj.length; i++) {
      result += stringifyJSON(obj[i]);
      if (i !== obj.length - 1) {
        result += ',';
      } else {
        result += ']';
      }
    }
  }
// object as object
  if (type === 'object' && Array.isArray(obj) === false && obj !== null) {
    if (Object.keys(obj).length === 0) {
      return '{}';
    }
    for (let key in obj) {
      if (typeof(obj[key]) === 'function' || obj[key] === undefined) {
        return '{}';
      }
    }
    result += '{';
    for (let key in obj) {
      result += stringifyJSON(key) + ':' + stringifyJSON(obj[key]);
      if (key !== Object.keys(obj).pop()) {
        result += ',';
      } else {
        result += '}';
      }
    }
  }
  return result;
}