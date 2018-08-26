hotelApp.controller('PokemonController', ['$http', function ($http) {
    vm = this;
    console.log('PokemonController Loaded');
   // const Pokedex = require('pokedex-promise-v2');
   // const P = new Pokedex();

    vm.pokemonArray = [];

function getPokemon() {
    console.log('in GET Pokemon');
    
    $http({
        method: 'GET',
        url:'/pokemon'
    }).then(function(response){
        vm.pokemonArray = response.data;
        console.log('pokemon get', vm.pokemonArray);
    }).catch((error)=>{
        console.log('error in getpokemon', error);
    });
};
getPokemon();
vm.addPokemon = function (id) {
    console.log(id);
    apiPokemon(id);
    //vm.getPokemonByName(id);
};


function apiPokemon(id) {
    console.log('in Pokemon api'); 
    $http({
        method: 'GET',
        url:'http://pokeapi.co/api/v2/pokemon/'+ id 
    }).then(function(response){
        console.log(response.data.name);
    }).catch((error)=>{
        console.log('error in getpokemon', error);
    });
};

}]);//end controller
