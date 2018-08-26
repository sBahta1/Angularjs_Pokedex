const hotelApp = angular.module('hotelApp',['ngRoute','ngMaterial']);

hotelApp.config( function($routeProvider){
    console.log('Route Provider working');
    $routeProvider.when('/',{
        templateUrl:'views/home.html',
        controller: 'HomeController as vm'
    }).when('/pokemon',{
        templateUrl:'views/pokemon.html',
        controller:'PokemonController as vm'
    }).when('/trainer',{
        templateUrl:'views/trainer.html',
        controller:'TrainerController as vm'
    }).otherwise({
        template:'<h1>Error 404 page not found</h1>'
    });
});