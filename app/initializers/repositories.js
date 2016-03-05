import registerWithContainer from 'ember-cli-auto-register/register';

export function initialize() {
    let application = arguments[1] || arguments[0];
    registerWithContainer('repositories', application);
}

export default {
    name: 'repositories',
    initialize: initialize
};
