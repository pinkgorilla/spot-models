'use strict';

var BaseModel = require('capital-models').BaseModel

module.exports = class SpotPicture extends BaseModel {
    constructor(source) {
        super('1.0.0', 'spot-picture');

        this.filename = '';
        this.binary = [];
        this.date = new Date();
        this.authorId = {};
        this.reports = [];
        this.spam = false;
        
        this.copy(source);
    }
}