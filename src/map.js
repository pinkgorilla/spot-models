module.exports = {
    auth: {
        type: {
            Account: 'account',
            Profile: 'profile',
            Role: 'role'
        },
        collection: {
            Account: 'accounts',
            Role: 'roles'
        }
    },
    core: {
        type: {
            Spot: 'spot',
            SpotType: 'spot-type',
            OperatingHours: 'operating-hours',
            SpotComment: 'spot-comment',
            SpotPicture: 'spot-picture',
            SpotReport: 'spot-report'
        },
        collection: {
            Spot: 'spots',
            SpotType: 'spot-types',
            OperatingHours: 'operating-hours',
            SpotComment: 'spot-comments',
            SpotPicture: 'spot-pictures',
            SpotReport: 'spot-reports'
        }
    }
}
