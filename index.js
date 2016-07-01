exports.OperatingHours = require("./src/operating-hours");
exports.SpotType = require('./src/spot-type');
exports.Spot = require('./src/spot');
exports.SpotComment = require('./src/spot-comment');
exports.SpotReport = require('./src/spot-report');
exports.SpotPicture = require('./src/spot-picture');

if(process.env.NODE_ENV && process.env.NODE_ENV.toString() === 'development')
{
    exports.Validator = require('./test/validator');    
}