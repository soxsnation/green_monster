/* config.js
 *
 * Author(s):  Andrew Brown
 * Date:       8/27/2015
 *
 */

module.exports = function() {
    var config = {
        server: '52.11.97.3',
        debug_mode: true,
        port: 27017,
        db: 'green_monster',
        options: {
            server: {
                socketOptions: {
                    keepAlive: 1
                }
            },
            username: 'soxsnation',
            password: 's0xn@t10n'
        },
        app: {
            name: 'soxsnation DEV'
        },
        models: [
            'sn',
            'session',
            'sn_old'
        ],
        model_defs: [
        	'sn_def'
        ],
        log_funs: [
        	'apicall',
        	'funcall',
        	'event',
        	'alert',
        	'assert',
        	'error',
        	'debug_info',
        	'data',
        	'ds'
        ]
    };
    return config;
}