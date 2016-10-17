var validate = require('../src/validator').core;

it('#01. New OperatingHours should valid', function(done) {
    var OperatingHours = require('../src/core/operating-hours');
    validate.operatingHours(new OperatingHours());
    done();
})

it('#02. New SpotReport should valid', function(done) {
    var SpotReport = require('../src/core/spot-report');
    validate.spotReport(new SpotReport());
    done();
})

it('#03. New SpotComment should valid', function(done) {
    var SpotComment = require('../src/core/spot-comment');
    validate.spotComment(new SpotComment());
    done();
})

it('#04. New SpotPicture should valid', function(done) {
    var SpotPicture = require('../src/core/spot-picture');
    validate.spotPicture(new SpotPicture());
    done();
})

it('#05. New SpotType should valid', function(done) {
    var SpotType = require('../src/core/spot-type');
    validate.spotType(new SpotType());
    done();
})

it('#06. New Spot should valid', function(done) {
    var Spot = require('../src/core/spot');
    validate.spot(new Spot());
    done();
})