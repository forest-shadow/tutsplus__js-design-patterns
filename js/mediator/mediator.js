define( function() {
  'use strict';

  var Mediator = function () {
    this.colleagues = [];
  };

  Mediator.prototype.register = function(colleague) {
    this.colleagues.push(colleague);
  };

  Mediator.prototype.send = function (recepientId, message) {
    this.colleagues.some(function(colleague) {
      if (colleague.id === recepientId) {
        return colleague.receiveMessage(message);
      }
    })
  };

  Mediator.prototype.broadcast = function ( message, sender ) {
    this.colleagues.forEach(function (colleague) {
      if (colleague.id !== sender.id) {
        colleague.receiveMessage(message);
      }
    })
  };

  return Mediator;
});