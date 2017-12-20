(function() {
    'use strict';

angular
    .module('myApp')
    .config(config);

config.$inject = ['$stateProvider', '$urlRouterProvider'];

function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('list', {
            url: '/',
            templateUrl: 'app/list/list.html',
            controller: 'ListController as listCtrl'
        })

} //config

})();
