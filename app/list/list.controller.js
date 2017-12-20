(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('ListController', ListController);

    ListController.$inject = ['openWeatherService'];

    function ListController(openWeatherService) {

    var vm = this;

    vm.selectedTarget = "21";

    vm.getView = function() {
        vm.list = "";
        openWeatherService.getBox()
            .then(function(data) {
                // get top 5 locations
                var viewList = getSortedList(data.list, vm.selectedTarget);
                vm.winner = viewList[0];
                vm.list = viewList.slice(1, 5);
        });
    };


    //////////////////////// helpers ///////////////////////////

    // Sort list of locations by closest value to "perfect weather".
    function getSortedList(list, tempTarget){
        let sorted = _.sortBy(list, function(obj){
            return Math.min(Math.abs(obj.main.temp - tempTarget ) + Math.abs(obj.main.humidity -50));
        });
        return sorted.slice(0, 5);
    }

} //CTRL
})();
