require('should');

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

module.exports = validateSpotReport;