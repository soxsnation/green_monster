/* mongoose_util.js
 *
 * Author(s):  Andrew Brown
 * Date:       1/21/2016
 */


 module.exports = function(mongoose, config) {

    // Bootstrap db connection
    // Connect to mongodb
    var connect = function() {

        var options = {
            server: {
                socketOptions: {
                    keepAlive: 1
                }
            }
        }
        mongoose.connect('mongodb://' + config.server + '/' + config.db, options);
    }
    connect();

    // Error handler
    mongoose.connection.on('error', function(err) {
        console.log(err)
    });

    // Reconnect when closed
    mongoose.connection.on('disconnected', function() {
        connect()
    });

    // console.log('Models: ' + config.models.length);
    // for (var i = 0; i < config.models.length; ++i) {
    //     // Bootstrap models
    //     var models_path = __dirname + '/' + config.models[i];
    //     fs.readdirSync(models_path).forEach(function(file) {
    //         console.log('Found file: ' + file)
    //         if (~file.indexOf('.js')) require(models_path + '/' + file)
    //     });
    // }





}