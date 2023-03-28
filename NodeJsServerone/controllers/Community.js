'use strict';

var utils = require('../utils/writer.js');
var Community = require('../service/CommunityService');

module.exports.getComPosts = function getComPosts (req, res, next, comId) {
  Community.getComPosts(comId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.makeCom = function makeCom (req, res, next) {
  Community.makeCom()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
