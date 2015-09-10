var ADMIN_USER_FIXTURE = (function() {
    var factory = function() {
    };
    factory.prototype.list = function() {
        return [
            {id: 1, name: 'Toran Billups'},
            {id: 2, name: 'Brandon Williams'},
            {id: 3, name: 'Jarrod Taylor'}
        ];
    };
    return factory;
})();

if (typeof window === 'undefined') {
    module.exports = new ADMIN_USER_FIXTURE();
} else {
    define('admin/vendor/fixtures/users', ['exports'], function (exports) {
        'use strict';
        return new ADMIN_USER_FIXTURE();
    });
}
