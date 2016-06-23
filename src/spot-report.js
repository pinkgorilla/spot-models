'use strict';

var MongoModel = require('capital-models').MongoModel

module.exports = class SpotReport extends MongoModel {
    constructor(source) {
        super('1.0.0', 'spot-report');

        this.title = '';
        this.date = new Date();
        this.message = '';
        
        this.authorId = {};
        this.resolved = false; 
        
        this.copy(source);
    }
}