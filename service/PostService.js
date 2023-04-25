'use strict';


/**
 * Add a new post to the server
 * Add a new post to the server
 *
 * body Post Create a new post in the server
 * returns Post
 **/
exports.addPost = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "photoUrls" : [ "photoUrls", "photoUrls" ],
  "id" : 10,
  "comId" : 211331,
  "parentPostId" : 211331,
  "userId" : 211331,
  "content" : "The old Ben and Jerry's was better.",
  "likeNum" : 22,
  "timestamp" : "09:03:02 May 4th 2023"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Add a new post to the server
 * Add a new post to the server
 *
 * body Post Create a new post in the server
 * returns Post
 **/
exports.addPost = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "photoUrls" : [ "photoUrls", "photoUrls" ],
  "id" : 10,
  "comId" : 211331,
  "parentPostId" : 211331,
  "userId" : 211331,
  "content" : "The old Ben and Jerry's was better.",
  "likeNum" : 22,
  "timestamp" : "09:03:02 May 4th 2023"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Deletes a post
 * delete a post
 *
 * postId Long Post id to delete
 * api_key String  (optional)
 * no response value expected for this operation
 **/
exports.deletePost = function(postId,api_key) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Find post by ID
 * Returns a single post
 *
 * postId Long ID of post to return
 * returns Post
 **/
exports.getPostById = function(postId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "photoUrls" : [ "photoUrls", "photoUrls" ],
  "id" : 10,
  "comId" : 211331,
  "parentPostId" : 211331,
  "userId" : 211331,
  "content" : "The old Ben and Jerry's was better.",
  "likeNum" : 22,
  "timestamp" : "09:03:02 May 4th 2023"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * uploads an image
 *
 * body Object  (optional)
 * additionalMetadata String Additional Metadata (optional)
 * postId Long ID of post to share
 * returns ApiResponse
 **/
exports.likePost = function(body,additionalMetadata,postId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : 0,
  "type" : "type",
  "message" : "message"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * uploads an image
 *
 * body Object  (optional)
 * additionalMetadata String Additional Metadata (optional)
 * postId Long ID of post to share
 * returns ApiResponse
 **/
exports.sharePost = function(body,additionalMetadata,postId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : 0,
  "type" : "type",
  "message" : "message"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * uploads an image
 *
 * body Object  (optional)
 * additionalMetadata String Additional Metadata (optional)
 * postId Long ID of post to share
 * returns ApiResponse
 **/
exports.unlikePost = function(body,additionalMetadata,postId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : 0,
  "type" : "type",
  "message" : "message"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an existing post
 * Update an existing post by Id
 *
 * body Post Update an existing post on the server
 * returns Post
 **/
exports.updatePost = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "photoUrls" : [ "photoUrls", "photoUrls" ],
  "id" : 10,
  "comId" : 211331,
  "parentPostId" : 211331,
  "userId" : 211331,
  "content" : "The old Ben and Jerry's was better.",
  "likeNum" : 22,
  "timestamp" : "09:03:02 May 4th 2023"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an existing post
 * Update an existing post by Id
 *
 * body Post Update an existing post on the server
 * returns Post
 **/
exports.updatePost = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "photoUrls" : [ "photoUrls", "photoUrls" ],
  "id" : 10,
  "comId" : 211331,
  "parentPostId" : 211331,
  "userId" : 211331,
  "content" : "The old Ben and Jerry's was better.",
  "likeNum" : 22,
  "timestamp" : "09:03:02 May 4th 2023"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Updates a post in the store with form data
 *
 * postId Long ID of post that needs to be updated
 * name String Name of pet that needs to be updated (optional)
 * status String Status of pet that needs to be updated (optional)
 * no response value expected for this operation
 **/
exports.updatePostWithForm = function(postId,name,status) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * uploads an image
 *
 * body Object  (optional)
 * additionalMetadata String Additional Metadata (optional)
 * postId Long ID of post to update
 * returns ApiResponse
 **/
exports.uploadFile = function(body,additionalMetadata,postId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : 0,
  "type" : "type",
  "message" : "message"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

