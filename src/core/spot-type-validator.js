require("should");

var validateSpotType = function(type) {
    type.should.not.equal(null);

    type.should.have.property("name");
    type.name.should.instanceof(String);

    type.should.have.property("description");
    type.description.should.instanceof(String);

    type.should.have.property("icon");
    type.icon.should.instanceof(String);
};

module.exports = validateSpotType;