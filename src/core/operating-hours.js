'use strict';

module.exports = class OperatingHours {
    constructor() {
        this.days = [];
        for (var i = 0; i < 7; i++)
            this.days.push({
                day: i,
                opening: '00:00',
                closing: '00:00'
            })
    }
}