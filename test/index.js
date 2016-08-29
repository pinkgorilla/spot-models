it('#01. New OperatingHours should valid', function(done) {
    var OperatingHours = require('../src/operating-hours');
    var validate = require('../src/operating-hours-validator');
    validate(new OperatingHours());
    done();
})

it('#02. New SpotReport should valid', function(done) {
    var SpotReport = require('../src/spot-report');
    var validate = require('../src/spot-report-validator');
    validate(new SpotReport());
    done();
})

it('#03. New SpotComment should valid', function(done) {
    var SpotComment = require('../src/spot-comment');
    var validate = require('../src/spot-comment-validator');
    validate(new SpotComment());
    done();
})

it('#04. New SpotPicture should valid', function(done) {
    var SpotPicture = require('../src/spot-picture');
    var validate = require('../src/spot-picture-validator');
    validate(new SpotPicture());
    done();
})

it('#05. New SpotType should valid', function(done) {
    var SpotType = require('../src/spot-type');
    var validate = require('../src/spot-type-validator');
    validate(new SpotType());
    done();
})

it('#06. New Spot should valid', function(done) {
    var Spot = require('../src/spot');
    var validate = require('../src/spot-validator');
    validate(new Spot());
    done();
})