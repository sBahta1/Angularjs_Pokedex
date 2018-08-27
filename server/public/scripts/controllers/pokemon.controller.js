hotelApp.controller('PokemonController', ['$http', function ($http) {
    vm = this;
    console.log('PokemonController Loaded');
    
    vm.trainerList= [];
    vm.pokeKanto = [];
    vm.pokeJohto = [];
    vm.pokeHoenn = [];


    vm.addPokemon = function (id) {
       // console.log('click', id);
        let newCaught = {
            trainer_num: vm.trainerSelect,
            poke_num:id
        }
        console.log(newCaught); 
    };
    //get pokemon and populate selction window
    function getKantoPokemon() {
        console.log('in GET Pokemon');
        $http({
            method: 'GET',
            url: '/pokemon/kanto'
        }).then(function (response) {
            vm.pokeKanto = response.data;
        //    console.log('pokemon get', vm.pokeKanto);
        }).catch((error) => {
            console.log('error in getKantoPokemon', error);
        });
    };

    function getJohtoPokemon() {
        console.log('in GET Pokemon');
        $http({
            method: 'GET',
            url: '/pokemon/johto'
        }).then(function (response) {
            vm.pokeJohto = response.data;
        //    console.log('pokemon get', vm.pokeJohto);
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
        //    console.log('pokemon get', vm.pokeHoenn);
        }).catch((error) => {
            console.log('error in getHoennPokemon', error);
        });
    };
    function getTrainerList() {
        $http({
            method: 'GET',
            url: '/trainer',
        }).then(function (response) {
            vm.trainerList = response.data;
            console.log('trainers', vm.trainerList);
        }).catch((error) => {
            console.log('Error in combo');
        });
    };//End getTrainerList

    getKantoPokemon();
    getJohtoPokemon();
    getHoennPokemon();
    getTrainerList();


}]);//end controller