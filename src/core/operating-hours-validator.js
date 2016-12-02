require("should");

var validateOperatingHours = function(operatingHours) {
    operatingHours.should.not.equal(null, "operating hours is null");
    operatingHours.should.have.property("days");
    operatingHours.days.should.instanceOf(Array);

    for (var day of operatingHours.days) {
        day.should.be.instanceOf(Object);
        day.should.have.property("day");
        day.should.have.property("opening");
        day.should.have.property("closing");
    }
};

module.exports = validateOperatingHours;