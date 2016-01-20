







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