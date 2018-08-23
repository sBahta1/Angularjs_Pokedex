const app = angular.module('HotelApp',['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
    console.log('Route Provider working');
    $routeProvider.when('/',{
        templateUrl:'views.home.html',
        controller: 'HomeController as hc'
    }).when('/pets',{
        templateUrl:'views/pets.html',
        controller:'PetsController as pc'
    }).when('/owners',{
        templateUrl:'views/owners.html',
        controller:'OwnerController.html as oc'
    }).otherwise({
        template:'<h1>Error 404 page not found</h1>'
    });
}]);