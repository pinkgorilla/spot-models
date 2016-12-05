"use strict";

var BaseModel = require("model-toolkit").BaseModel;

module.exports = class SpotType extends BaseModel {
    constructor(source) {
        super("1.0.0", "spot-type");
        
        this.name = "";
        this.description = "";
        this.icon = "";
        this.copy(source);
    }
};