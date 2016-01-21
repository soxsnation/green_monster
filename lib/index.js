/* index.js
 *
 * Author(s):  Andrew Brown
 * Date:       1/21/2016
 */


var mongoose = require('mongoose');
var Schema = mongoose.Schema;


/**
 * Green_Monster constructor.
 *
 * The exports object of the `mongoose` module is an instance of this class.
 * Most apps will only use this one instance.
 *
 * @api public
 */

function Green_Monster () {
  this.connections = [];
  this.plugins = [];
  this.models = {};
  this.modelSchemas = {};
  // default global options
  this.options = {
    pluralization: true
  };
  var conn = this.createConnection(); // default connection
  conn.models = this.models;
};



exports.add_model = function(model_name, model) {
  this.models[model_name] = model;
}

exports.model_count = function() {
  return this.models.length;
}



/*!
 * The exports object is an instance of Green_Monster.
 *
 * @api public
 */

var gm = module.exports = exports = new Green_Monster;