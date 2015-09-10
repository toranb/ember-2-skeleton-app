import Store from 'ember-cli-simple-store/store';

export default function(container, registry, keys) {
    var factory = window.require('ember/resolver')['default'];
    var resolver = factory.create({namespace: {modulePrefix: 'admin'}});
    registry.register('store:main', Store);
    keys.forEach(function(key) {
        var factory = resolver.resolve('admin@' + key);
        registry.register(key, factory);
    });
    return container.lookup('store:main');
}
