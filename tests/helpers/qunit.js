import Ember from 'ember';
import {test} from 'qunit';
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

export { module, test };
