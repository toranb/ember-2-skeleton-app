import Ember from 'ember';
import {test as qunitTest} from 'qunit';
import {module as qunitModule} from 'qunit';

var Owner = Ember.Object.extend(Ember._RegistryProxyMixin, Ember._ContainerProxyMixin);

var module = function(name, settings){
    settings = settings || {};
    qunitModule(name, {
        beforeEach: function() {
            this.registry = new Ember.Registry();

            this.owner = Owner.create({
                __registry__: this.registry
            });

            this.container = this.registry.container({
                owner: this.owner
            });

            this.owner.__container__ = this.container;
            if(typeof settings.beforeEach === 'function') {
                return settings.beforeEach.apply(this, arguments);
            }
        },
        afterEach: function() {
            this.container = null;
            this.registry = null;
            this.owner = null;
            if(typeof settings.afterEach === 'function') {
                return settings.afterEach.apply(this, arguments);
            }
        }
    });
};

var test = function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; ++_key) {
        args[_key] = arguments[_key];
    }
    var callback;
    function wrapper() {
        let argz = arguments;
        Ember.run(function() {
            callback.apply(null, argz);
        });
    }
    callback = args.splice(1, 1, wrapper)[0];
    qunitTest.apply(null, args);
};

export { module, test };
