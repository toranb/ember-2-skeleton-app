import registerWithContainer from 'ember-cli-auto-register/register';

export function initialize() {
    let application = arguments[1] || arguments[0];
    registerWithContainer('repositories', application);
    application.inject('repositories', 'store', 'store:main');
}

export default {
    name: 'repositories',
    after: 'store',
    initialize: initialize
};
