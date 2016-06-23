'use strict';

var MongoModel = require('capital-models').MongoModel;

module.exports = class SpotType extends MongoModel {
    constructor(source) {
        super('1.0.0', 'spot-type');
        
        this.name = '';
        this.description = '';
        this.icon = '';
        this.copy(source);
    }
}