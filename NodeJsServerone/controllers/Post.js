'use strict';

var utils = require('../utils/writer.js');
var Post = require('../service/PostService');

module.exports.addPost = function addPost (req, res, next, body) {
  Post.addPost(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.addPost = function addPost (req, res, next, body) {
  Post.addPost(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deletePost = function deletePost (req, res, next, postId, api_key) {
  Post.deletePost(postId, api_key)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPostById = function getPostById (req, res, next, postId) {
  Post.getPostById(postId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.likePost = function likePost (req, res, next, body, additionalMetadata, postId) {
  Post.likePost(body, additionalMetadata, postId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sharePost = function sharePost (req, res, next, body, additionalMetadata, postId) {
  Post.sharePost(body, additionalMetadata, postId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.unlikePost = function unlikePost (req, res, next, body, additionalMetadata, postId) {
  Post.unlikePost(body, additionalMetadata, postId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updatePost = function updatePost (req, res, next, body) {
  Post.updatePost(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updatePost = function updatePost (req, res, next, body) {
  Post.updatePost(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updatePostWithForm = function updatePostWithForm (req, res, next, postId, name, status) {
  Post.updatePostWithForm(postId, name, status)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.uploadFile = function uploadFile (req, res, next, body, additionalMetadata, postId) {
  Post.uploadFile(body, additionalMetadata, postId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
