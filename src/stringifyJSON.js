// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var result = '';
  var resultArray = [];
  var resultObject = [];

  if(typeof obj === 'boolean' || typeof obj === 'number'){
    result = obj.toString();
  }

  else if(obj === null){
    result = 'null';
  }

  else if(typeof obj === 'string'){
    result = '"' + obj + '"';
  }

  else if(Array.isArray(obj)){
    if(obj.length === 0){
      result = '[]';
    }else{
      for(var i = 0; i < obj.length; i++){
        resultArray.push(stringifyJSON(obj[i]));
      }
    }
    return "[" + resultArray + "]";
  }

  else if(obj instanceof Object){
    for(var key in obj){
      if(typeof obj[key] === undefined || obj[key] instanceof Function){
        resultObject.push('{}');
      }else if(typeof obj[key] === 'boolean' || typeof obj[key] === 'number'){
        resultObject.push('"' + key + '"' + ':' + obj[key]);
      }else if(obj[key] === null){
        resultObject.push('"' + key + '"' + ':' + obj[key]);
      }else if(typeof obj === 'string'){
        resultObject.push('"' + key + '"' + ':' + '"' + obj[key] + '"');
      }else if(obj instanceof Object){
        resultObject.push('"' + key + '"' + ':' + stringifyJSON(obj[key]));
      }
    }
    return '{' + resultObject + '}';
  }

  return result;
};

console.log(stringifyJSON([1,2,3]));
