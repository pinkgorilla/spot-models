require("should");

var validateSpotReport = require("./spot-report-validator");

var validateSpotComment = function(comment) {
    comment.should.not.equal(null);

    comment.should.have.property("title");
    comment.title.should.instanceof(String);

    comment.should.have.property("date");
    comment.date.should.instanceof(Date);

    comment.should.have.property("comment");
    comment.comment.should.instanceof(String);

    comment.should.have.property("authorId");
    comment.authorId.should.instanceof(Object);

    comment.should.have.property("replies");
    comment.replies.should.instanceof(Array);
    for (var reply of comment.replies)
        validateSpotComment(reply);

    comment.should.have.property("reports");
    comment.reports.should.instanceof(Array);
    for (var report of comment.reports)
        validateSpotReport(report);

    comment.should.have.property("spam");
    comment.spam.should.be.Boolean();
};
 
module.exports = validateSpotComment;