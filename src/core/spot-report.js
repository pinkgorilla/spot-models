'use strict';

var BaseModel = require('capital-models').BaseModel

module.exports = class SpotReport extends BaseModel {
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