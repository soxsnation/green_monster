/* model.js
 *
 * Author(s):  Andrew Brown
 * Date:       1/21/2016
 */

var model_types = [
    'string',
    'number',
    'boolean',
    'date',
    'object'
];

var model_fields = {
    type: {
        default: 'string'
    },
    is_array: {
        default: false
    },
    required: {
        default: false
    },
    default_value: {
        default: ''
    },
    auto_gen: {
        default: false
    },
    valid_values: {
        default: []
    }
};

function sn_model(name) {
    this.name = name;
    this.fields = {};
}

sn_model.prototype.add_model_field = function(name, model_item) {
    var model_field = {};

    for (var field in model_fields) {
        if (model_item.hasOwnProperty(field)) {
            model_field[field] = model_item[field];
        } else {
            model_field[field] = model_fields[field].default;
        }
    }
    this.fields[name] = model_field;
}

sn_model.prototype.convert_model_field = function(field_name) {
    var mongoose_field = {};
    mongoose_field[field_name] = {
        type: this.fields[field_name].type,
        default: this.fields[field_name].default
    };

    console.log(JSON.stringify(mongoose_field))
    return mongoose_field;
}

sn_model.prototype.validate_model = function(model_data) {

}

sn_model.prototype.populate_model = function(model_data) {
	return model_data;
}


module.exports = exports = sn_model;
