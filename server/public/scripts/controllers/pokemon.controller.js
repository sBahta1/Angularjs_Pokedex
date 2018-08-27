hotelApp.controller('PokemonController', ['$http', function ($http) {
    vm = this;
    console.log('PokemonController Loaded');
    // const Pokedex = require('pokedex-promise-v2');
    // const P = new Pokedex();

    vm.pokemonArray = [];
    vm.pokeKanto = [];
    vm.pokeJohto = [];
    vm.pokeHoenn = [];
    // function getPokemon() {
    //     console.log('in GET Pokemon');

    //     $http({
    //         method: 'GET',
    //         url: '/pokemon'
    //     }).then(function (response) {
    //         vm.pokemonArray = response.data;
    //         console.log('pokemon get', vm.pokemonArray);
    //     }).catch((error) => {
    //         console.log('error in getpokemon', error);
    //     });
    // };
    // getPokemon();
    vm.addPokemon = function (id) {
        console.log('click',id);
       // apiPokemon(id);
        //vm.getPokemonByName(id);
    };
    //get pokemon and populate selction window
    function getKantoPokemon() {
        console.log('in GET Pokemon');
        $http({
            method: 'GET',
            url: '/pokemon/kanto'
        }).then(function (response) {
            vm.pokeKanto = response.data;
            console.log('pokemon get', vm.pokeKanto);
        }).catch((error) => {
            console.log('error in getKantoPokemon', error);
        });
    };
    getKantoPokemon();
    getJohtoPokemon()
    getHoennPokemon();
    function getJohtoPokemon() {
        console.log('in GET Pokemon');
        $http({
            method: 'GET',
            url: '/pokemon/johto'
        }).then(function (response) {
            vm.pokeJohto = response.data;
            console.log('pokemon get', vm.pokeJohto);
        }).catch((error) => {
            console.log('error in getJohtoPokemon', error);
        });
    };
    
    function getHoennPokemon() {
        console.log('in GET Pokemon');
        $http({
            method: 'GET',
            url: '/pokemon/hoenn'
        }).then(function (response) {
            vm.pokeHoenn = response.data;
            console.log('pokemon get', vm.pokeHoenn);
        }).catch((error) => {
            console.log('error in getHoennPokemon', error);
        });
    };

    function apiPokemon(id) {
        console.log('in Pokemon api');
        $http({
            method: 'GET',
            url: 'http://pokeapi.co/api/v2/pokemon/' + id
        }).then(function (response) {
            console.log(response.data.name);
        }).catch((error) => {
            console.log('error in getpokemon', error);
        });
    };

}]);//end controller