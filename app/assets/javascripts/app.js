angular.module('shopping', [])
    .controller('MainCtrl', [
        '$scope',
        function($scope){
            $scope.test = 'Hello world!';
        }]);