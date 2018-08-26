hotelApp.controller('PokemonController', ['$http', function ($http) {
    vm = this;
    console.log('PokemonController Loaded');

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


}]);//end controller
