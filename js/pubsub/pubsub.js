define(function() {
    'use strict';

    var subscribers = {};

    return {
        // this method receive two parameters - the first one will be the event to publish, and the second one will be the parameters that may be passed to the callback
        publish: function( event, data ) {
            if(!subscribers[event]) {
                return;
            }

            subscribers[event].forEach(function(subscriber) {
                subscriber(data);
            });
        },
        //  register an event and a callback to execute when such event get invoked
        subscribe: function( event, callback ) {
            var index;

            if(!subscribers[event]) {
                subscribers[event] = [];
            }

            index = subscribers[event].push(callback) - 1;

            return {
                dispose: function() {
                    subscribers[event].splice(index, 1);
                }
            }
        }
    };
});