angular
    .module('myApp')
    .factory('openWeatherService', openWeatherService);

openWeatherService.$inject = ['$http'];

function openWeatherService($http) {

    const baseUrl = 'http://api.openweathermap.org/data/2.5/box/city?';
    const params = 'cluster=no&cnt=200&format=json&bbox=-180,-90,180,90,6&units=metric'
    const APIKEY = '96bc89a1169c61cd729cb6759ddbee56';

    return {
        getBox: getBox
    };

    ///////////////////////////////////////////////////////

    function getBox(list) {
        var url = baseUrl + params + '&APPID=' + APIKEY ;
        return $http.get(url)
            .then(getBoxComplete)
            .catch(getBoxFailed);

        function getBoxComplete(response) {
            return response.data;
        }

        function getBoxFailed(error) {
            alert('XHR Failed: ' + error.data);
        }
    }
}
