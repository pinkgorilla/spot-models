'use strict'

var MongoModel = require('capital-models').MongoModel
var OperationalHours = require('./operational-hours');

module.exports = class Spot extends MongoModel {
    constructor(source) {
        super('1.0.0', 'spot');

        this.name = '';
        this.description = '';
        this.location = {};
        this.operationalHours = new OperationalHours();
        
        this.authorId = {};
        
        this.like = 0.0;
        this.dislike = 0.0;
        
        this.type = {};
        this.tags = [];
        
        this.comments = [];
        this.photos = [];
        
        this.reports = [];
        this.spam = false;
        
        this.copy(source);
    }
}