module.exports = {

    auth: {
        account: require("./auth/account-validator"),
        profile: require("./auth/profile-validator"),
        role: require("./auth/role-validator")
    },
    core: {
        operatingHours: require('./core/operating-hours-validator'),
        spotComment: require('./core/spot-comment-validator'),
        spotPicture: require('./core/spot-picture-validator'),
        spotReport: require('./core/spot-report-validator'),
        spotType: require('./core/spot-type-validator'),
        spot: require('./core/spot-validator')
    }
};