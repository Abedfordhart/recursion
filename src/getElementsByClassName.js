// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, parent, results){
  // your code here
  var results = results || [];
  var parent = parent || document.body;

  if(parent.classList.contains(className)){
    results.push(parent);
  }

  for(var i = 0; i < parent.children.length; i++){
    results.concat(getElementsByClassName(className, parent.children[i], results));
  }

  return results;
}
