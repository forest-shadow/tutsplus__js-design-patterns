require(
    [ 'factory/init', 'pubsub/init', 'strategy/init', 'observer/init',
      'cor/init', 'mediator/init', 'iterator/init', 'facade/init', 'decorator/init',
        'adapter/init', 'composite/init' ],
    function( factory, pubsub, strategy, observer, cor, mediator, iterator, facade, decorator, adapter, composite ) {
        'use strict';

        var examples = {
            factory: factory,
            pubsub: pubsub,
            strategy: strategy,
            observer: observer,
            cor: cor,
            mediator: mediator,
            iterator: iterator,
            facade: facade,
            decorator: decorator,
            adapter: adapter,
            composite: composite
        };

        window.runExample = function(example) {
            examples[example].init();
        }
    }
);