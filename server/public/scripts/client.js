const hotelApp = angular.module('hotelApp',['ngRoute']);

hotelApp.config( function($routeProvider){
    console.log('Route Provider working');
    $routeProvider.when('/',{
        templateUrl:'views/home.html',
        controller: 'HomeController as vm'
    }).when('/pets',{
        templateUrl:'views/pets.html',
        controller:'PetsController as vm'
    }).when('/trainer',{
        templateUrl:'views/trainer.html',
        controller:'TrainerController as vm'
    }).otherwise({
        template:'<h1>Error 404 page not found</h1>'
    });
});