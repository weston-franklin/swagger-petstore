'use strict';


/**
 * Get the posts from a specific community based on ID.
 * For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.
 *
 * comId Long ID of community that needs to be fetched
 * returns Community
 **/
exports.getComPosts = function(comId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "comAdmin" : { },
  "id" : 10,
  "comDescription" : "In this community, you must post in iambic pentameter"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * create new community
 * creates a new community based on user input
 *
 * returns Map
 **/
exports.makeCom = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "key" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

