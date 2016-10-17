'use strict';

var BaseModel = require('capital-models').BaseModel

module.exports = class SpotComment extends BaseModel {
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