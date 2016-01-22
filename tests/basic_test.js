/* basic_test.js
 *
 * Author(s):  Andrew Brown
 * Date:       1/21/2016
 */

var assert = require('assert'),
    gm = require('../lib');
var config = require('./config')();

var st = "test";

assert.equal(st, gm.test(st));
assert.equal(st, gm.testing(st));


gm.init(config);

var base_model_fields = {
    field1: {
        type: 'string',
        is_array: false,
        is_array2: false
    },
    field2: {
        type: 'string',
        is_array: true,
        required: true
    }
};

gm.add_model('base', base_model_fields);
var m = gm.get_model_by_name('base');
console.log(JSON.stringify(m));

var item = gm.convert_model('base');

var item_data = {field1: 'one', field2: '2'};

gm.add_item('base', item_data);

// item.create({field1: 'one', field2: '2'}, function(err, data) {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(data);
// 	}
// });
