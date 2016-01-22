/* index.js
 *
 * Author(s):  Andrew Brown
 * Date:       1/21/2016
 */

var _ = require('lodash');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sn_model = require('./sn_model');

/*****************************************************************************************
 * helpers
 *****************************************************************************************/



/*****************************************************************************************
 * Green_Monster 
 *****************************************************************************************/

/**
 * Green_Monster constructor.
 *
 * The exports object of the `mongoose` module is an instance of this class.
 * Most apps will only use this one instance.
 *
 * @api public
 */

function Green_Monster() {
    this.config = {};
    this.connections = [];
    this.plugins = [];
    this.models = {};
    this.modelSchemas = {};
    // // default global options
    // this.options = {
    //   pluralization: true
    // };
    // var conn = this.createConnection(); // default connection
    // conn.models = this.models;
};



/*****************************************************************************************
 * Green_Monster Prototypes
 *****************************************************************************************/

Green_Monster.prototype.init = function(config) {
    this.config = config;
    require('./mongoose_util')(mongoose, this.config);
}

Green_Monster.prototype.add_model = function(model_name, fields) {
    var m = new sn_model(model_name);
    for (var f in fields) {
        m.add_model_field(f, fields[f]);
    }
    for (var i = 0; i < fields.length; ++i) {

    }
    this.models[model_name] = m;
}


Green_Monster.prototype.model_count = function() {
    return _.size(this.models);
}

Green_Monster.prototype.get_model_by_name = function(name) {
    return this.models[name];
}

Green_Monster.prototype.convert_model = function(model_name) {
    if (!this.models.hasOwnProperty(model_name)) {
        return null;
    } else {
        var m = this.models[model_name];
        var sch = new Schema;

        for (var f in m.fields) {
            sch.add(m.convert_model_field(f));
        }
        var mod = mongoose.model(model_name, sch);
        return mod;
    }
}

Green_Monster.prototype.add_item = function(model_name, data) {
    var mod = mongoose.model(model_name);
    var record = this.models[model_name].populate_model(data);
    mod.create(record, function(err, data) {
        if (err) {
            console.log(err);
            throw new Error(err);
        } else {
            console.log(data);
        }
    });
}

Green_Monster.prototype.update_item = function(model_name, data) {
	
}

Green_Monster.prototype.model = sn_model;








Green_Monster.prototype.test = function(v) {
    return v;
}

Green_Monster.prototype.testing = function(v) {
    return v;
}


/*!
 * The exports object is an instance of Green_Monster.
 *
 * @api public
 */

var gm = module.exports = exports = new Green_Monster;
