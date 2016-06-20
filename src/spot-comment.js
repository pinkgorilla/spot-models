'use strict'

var MongoModel = require('capital-models').MongoModel
module.exports = class SpotComment extends MongoModel {
    constructor(source) {
        super('1.0.0', 'spot-comment');

        this.title = '';
        this.date = new Date();
        this.comment = '';
        this.authorId = {};
        this.replies = [];
        
        this.reports = [];
        this.spam = false;
        
        this.copy(source);
    }
}