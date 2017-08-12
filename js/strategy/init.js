define(function( require ) {
    'use strict';

    return {
        init: function() {
            var Strategy = require( 'strategy/strategy' ),
                phoneValidator = require( 'strategy/validators/phone' ),
                emailValidator = require( 'strategy/validators/email' ),
                validator;

            validator = new Strategy();

            console.log( validator.selectValidator( phoneValidator ).validate( '12345678901' ) );
            console.log( validator.selectValidator( emailValidator ).validate( 'test' ) );
        }
    };
});