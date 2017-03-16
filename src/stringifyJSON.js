// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if(typeof obj === 'boolean' || typeof obj === 'number'){
    return obj.toString();
  }

  else if(obj === null){
    return '' + obj;
  }

  else if(typeof obj === 'string'){
    return '"' + obj + '"';
  }

  else if(typeof obj === 'undefined' || obj instanceof Function){
    return '';
  }

  else if(Array.isArray(obj)){
    var resultArray = [];
    
    if(obj.length === 0){
      return '[]';
    }else{
      for(var i = 0; i < obj.length; i++){
        resultArray.push(stringifyJSON(obj[i]));
      }
    return '[' + resultArray + ']';
    }
  }

  else if(typeof obj === 'object'){
    var resultObject = [];

    if(Object.keys(obj).length === 0){
      return '{}';
    }else{
      for(var key in obj){
        if(obj[key] !== undefined && typeof obj[key] !== 'function'){
          resultObject.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]))
        }
      }
      return '{' + resultObject + '}';
    }
  }

};

// console.log(stringifyJSON([1,2,3]));
