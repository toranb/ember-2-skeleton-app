import registerWithContainer from 'ember-cli-auto-register/register';

export function initialize() {
    var application = arguments[1] || arguments[0];
    registerWithContainer('deserializers', application);
}

export default {
    name: 'deserializers',
    initialize: initialize
};
