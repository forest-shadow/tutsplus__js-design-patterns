define( function( require ) {
    'use strict';

    // This factory will create objects of different objects types

    // object with media types Constructors
    var media = {
      Video: require( 'factory/mediaConstructors/video' ),
      Image: require( 'factory/mediaConstructors/image' )
    };

    return {
        createMedia: function( type, attributes ) {
            var MediaType = media[ type ];

            return new MediaType( attributes );
        }
    };
});