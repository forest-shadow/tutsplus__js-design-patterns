define(function( require ) {
    'use strict';

    return {
        init: function() {
            var moduleA = require('publish/moduleA'),
                moduleB = require('publish/moduleB');

            moduleB.publishEvent();
            moduleB.publishEvent();
        }
    };
});