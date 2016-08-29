exports.OperatingHours = require("./src/operating-hours");
exports.SpotType = require('./src/spot-type');
exports.Spot = require('./src/spot');
exports.SpotComment = require('./src/spot-comment');
exports.SpotReport = require('./src/spot-report');
exports.SpotPicture = require('./src/spot-picture');
exports.validate = {
    operatingHours: require('./src/operating-hours-validator'),
    spotComment: require('./src/spot-comment-validator'),
    spotPicture: require('./src/spot-picture-validator'),
    spotReport: require('./src/spot-report-validator'),
    spotType: require('./src/spot-type-validator'),
    spot: require('./src/spot-validator')
} 