'use strict'

var MongoModel = require('capital-models').MongoModel
module.exports = class SpotPicture extends MongoModel {
    constructor(source) {
        super('1.0.0', 'spot-picture');

        this.filename = '';
        this.binary = [];
        this.date = new Date();
        this.authorId = {};
        this.spam = false;
        
        this.copy(source);
    }
}