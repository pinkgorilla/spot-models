require("should");

var validateSpotReport = require("./spot-report-validator");

var validateSpotPicture = function(picture) {
    picture.should.not.equal(null);

    picture.should.have.property("filename");
    picture.filename.should.instanceof(String);

    picture.should.have.property("date");
    picture.date.should.instanceof(Date);

    picture.should.have.property("binary");
    picture.binary.should.instanceof(Array);

    picture.should.have.property("authorId");
    picture.authorId.should.instanceof(Object);

    picture.should.have.property("reports");
    picture.reports.should.instanceof(Array);
    for (var report of picture.reports) {
        validateSpotReport(report);
    }

    picture.should.have.property("spam");
    picture.spam.should.be.Boolean();
};

module.exports = validateSpotPicture;
