var validator = require('./validator');

it('#01. New OperatingHours should valid', function(done) {
    var OperatingHours = require('../src/operating-hours');
    validator.operatingHours(new OperatingHours());
    done();
})

it('#02. New SpotReport should valid', function(done) {
    var SpotReport = require('../src/spot-report');
    validator.spotReport(new SpotReport());
    done();
})

it('#03. New SpotComment should valid', function(done) {
    var SpotComment = require('../src/spot-comment');
    validator.spotComment(new SpotComment());
    done();
})

it('#04. New SpotPicture should valid', function(done) {
    var SpotPicture = require('../src/spot-picture');
    validator.spotPicture(new SpotPicture());
    done();
})

it('#05. New SpotType should valid', function(done) {
    var SpotType = require('../src/spot-type');
    validator.spotType(new SpotType());
    done();
})

it('#06. New Spot should valid', function(done) {
    var Spot = require('../src/spot');
    validator.spot(new Spot());
    done();
})