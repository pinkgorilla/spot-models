module.exports = {
    auth: {
        Account: require('./src/auth/account'),
        Profile: require('./src/auth/profile'),
        Role: require('./src/auth/role')
    },
    core: {
        OperatingHours: require("./src/core/operating-hours"),
        SpotType: require('./src/core/spot-type'),
        Spot: require('./src/core/spot'),
        SpotComment: require('./src/core/spot-comment'),
        SpotReport: require('./src/core/spot-report'),
        SpotPicture: require('./src/core/spot-picture'),
    },
    map: require('./src/map'),
    validator: require('./src/validator')
}
