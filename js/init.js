/**
 * AMD formula
 * id (optional) - unique id of the module (which is really just a path to the module)
 * dependencies (optional) - array of dependencies
 * factory (required) - return exported value of the module
 */
define(id, dependencies, factory);

/*
* Ex
  // app.js
 define(['jquery', 'd3'], function($, d3){
    // some awesome code
 });
 */


define(function( require ) {
    'use strict';

    return {
        init: function() {

        }
    };
});
