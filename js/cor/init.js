define(function (require) {
  'use strict';

  return {
    init: function() {
      var call, sms, email, handler,
          Handler = require('cor/handler'),
          callHandler = require('cor/handlers/call');

      call = {
        type: 'call',
        number: '07123456789',
        ownNumber: '070031101003'
      };

      sms = {
        type: 'sms',
        number: '07123456789',
        message: 'Hey Dan'
      };

      email = {
        type: 'email',
        recipient: 'dan@danwellman.co.uk',
        message: 'Hi Dan'
      };

      handler = new Handler(null, null, callHandler);
      handler.handleCommunication(email);
      handler.handleCommunication(sms);
      handler.handleCommunication(call);
    }
  }
});