(function() {
    'use strict';

angular
    .module('myApp')
    .run(run);

run.$inject = ['$rootScope', '$state', '$stateParams'];

function run($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
} //run

})();
