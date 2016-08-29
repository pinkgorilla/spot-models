require('should');

var validateOperatingHours = require('./operating-hours-validator');
var validateSpotType = require('./spot-type-validator');
var validateSpotComment = require('./spot-comment-validator');
var validateSpotPicture = require('./spot-picture-validator');
var validateSpotReport = require('./spot-report-validator');

var validateSpot = function(spot) {
    spot.should.not.equal(null);

    spot.should.have.property('name');
    spot.name.should.instanceof(String);

    spot.should.have.property('description');
    spot.description.should.instanceof(String);

    spot.should.have.property('location');
    spot.location.should.instanceof(Object);

    spot.should.have.property('operatingHours');
    validateOperatingHours(spot.operatingHours);

    spot.should.have.property('authorId');
    spot.authorId.should.instanceof(Object);

    spot.should.have.property('like');
    spot.like.should.be.Number();

    spot.should.have.property('dislike');
    spot.dislike.should.be.Number();

    spot.should.have.property('type');
    spot.type.should.instanceof(Object);
    validateSpotType(spot.type);

    spot.should.have.property('tags');
    spot.tags.should.instanceof(Array);

    spot.should.have.property('comments');
    spot.comments.should.instanceof(Array);
    for (var comment of spot.comments)
        validateSpotComment(comment);

    spot.should.have.property('photos');
    spot.photos.should.instanceof(Array);
    for (var photo of spot.photos)
        validateSpotPicture(photo);

    spot.should.have.property('reports');
    spot.reports.should.instanceof(Array);
    for (var report of spot.reports)
        validateSpotReport(report);

    spot.should.have.property('spam');
    spot.spam.should.be.Boolean();
}

module.exports = validateSpot;