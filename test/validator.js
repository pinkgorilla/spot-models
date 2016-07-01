var should = require('should');

var validateOperatingHours = function(operatingHours) {
    operatingHours.should.not.equal(null, 'operating hours is null');
    operatingHours.should.have.property('days');
    operatingHours.days.should.instanceOf(Array);

    for (var day of operatingHours.days) {
        day.should.be.instanceOf(Object);
        day.should.have.property('day');
        day.should.have.property('opening');
        day.should.have.property('closing');
    }
}

var validateSpotReport = function(report) {
    report.should.not.equal(null);

    report.should.have.property('title');
    report.title.should.instanceof(String);

    report.should.have.property('date');
    report.date.should.instanceof(Date);

    report.should.have.property('message');
    report.message.should.instanceof(String);

    report.should.have.property('authorId');
    report.authorId.should.instanceof(Object);

    report.should.have.property('resolved');
    report.resolved.should.be.Boolean();
}

var validateSpotComment = function(comment) {
    comment.should.not.equal(null);

    comment.should.have.property('title');
    comment.title.should.instanceof(String);

    comment.should.have.property('date');
    comment.date.should.instanceof(Date);

    comment.should.have.property('comment');
    comment.comment.should.instanceof(String);

    comment.should.have.property('authorId');
    comment.authorId.should.instanceof(Object);

    comment.should.have.property('replies');
    comment.replies.should.instanceof(Array);
    for (var reply of comment.replies)
        validateSpotComment(reply);

    comment.should.have.property('reports');
    comment.reports.should.instanceof(Array);
    for (var report of comment.reports)
        validateSpotReport(report);

    comment.should.have.property('spam');
    comment.spam.should.be.Boolean();
}

var validateSpotPicture = function(picture) {
    picture.should.not.equal(null);

    picture.should.have.property('filename');
    picture.filename.should.instanceof(String);

    picture.should.have.property('date');
    picture.date.should.instanceof(Date);

    picture.should.have.property('binary');
    picture.binary.should.instanceof(Array);

    picture.should.have.property('authorId');
    picture.authorId.should.instanceof(Object);

    picture.should.have.property('spam');
    picture.spam.should.be.Boolean();
}

var validateSpotType = function(type) {
    type.should.not.equal(null);

    type.should.have.property('name');
    type.name.should.instanceof(String);

    type.should.have.property('description');
    type.description.should.instanceof(String);

    type.should.have.property('icon');
    type.icon.should.instanceof(String);
}


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


exports.operatingHours = validateOperatingHours;
exports.spotReport = validateSpotReport;
exports.spotComment = validateSpotComment;
exports.spotPicture = validateSpotPicture;
exports.spotType = validateSpotType;
exports.spot = validateSpot;