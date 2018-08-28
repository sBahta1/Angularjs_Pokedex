const hotelApp = angular.module('hotelApp', ['ngRoute', 'ngMaterial']);

hotelApp.config(function ($routeProvider) {
    console.log('Route Provider working');
    $routeProvider.when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileController as vm'
    }).when('/pokemon', {
        templateUrl: 'views/pokemon.html',
        controller: 'PokemonController as vm'
    }).when('/trainer', {
        templateUrl: 'views/trainer.html',
        controller: 'TrainerController as vm'
    }).otherwise({
        template: '<h1>Please select from the options above</h1>'
    });
});