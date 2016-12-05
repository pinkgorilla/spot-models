"use strict";

var BaseModel = require("model-toolkit").BaseModel;
var OperatingHours = require("./operating-hours");
var SpotType = require("./spot-type");

module.exports = class Spot extends BaseModel {
    constructor(source) {
        super("1.0.0", "spot");

        this.name = "";
        this.description = "";
        this.location = {};
        this.operatingHours = new OperatingHours();

        this.authorId = {};

        this.like = 0.0;
        this.dislike = 0.0;

        this.spotTypeId = {};
        this.spotType = new SpotType();
        this.tags = [];

        this.comments = [];
        this.photos = [];

        this.reports = [];
        this.spam = false;

        this.copy(source);
    }
};
