var stringifyJSON = function(obj) {
  /*base case when recursion will return a value and terminate the loop
  for JSON stringify, we will get the pure value to return
  1)check if value is string, number, array, or object, if so, turn it into a STRING toString() method 
    string - return as it is (add quotes) 'string' =>  '"string"'
    boolean - return with quotes  ex. true => 'true'
    array - call stringifyJSON function for every element => [1, true, 'string', 5] => '[1, true, 'string', 5]'
    object - call stringifyJSON 

  2)
*/

//base case
  if (typeof obj === 'number' || typeof obj === 'boolean') {
    return obj.toString();
  }

  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  if (obj === null) {
    return 'null';
  }
  if (obj === undefined) {
    return undefined;
  }
  if (Array.isArray(obj)) {
    var array = []; // ['1','2','3']
    obj.forEach(function(element) {
      array.push(stringifyJSON(element));
    });
    return '[' + array.join(',') + ']';
  }
  if (typeof obj === 'object') {
    var array = [];
    for (var key in obj) {
      if(obj[key] !== undefined && typeof obj[key] !== 'function') {
        array.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
      }
    }
    return '{' + array.join(',') + '}';
  }
};

var number = 5;
var string = 'john';
var boolean = false;
var array = [1, true, 'string', 5, [1,2,3]];
var object = {
  a : 1,
  b : true,
  c : [1,2,3],
  john : {d:'kevin'}
};