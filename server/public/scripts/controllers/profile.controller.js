hotelApp.controller('ProfileController', ['$http', function ($http) {
    vm = this;
    console.log('ProfileController Loaded');
    vm.badgesArray = [];
    vm.profileArray = [];
    vm.trainerList = [];


    vm.fireAway = function () {
        getProfileBadges(vm.trainerSelect);
    }
    //grabs list of trainers in order to select specific profiles
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

    //gets pokemon by indicated trainer
    function getProfilePokemon(id) {
        //id = trainerSelect;
        console.log(id);
        $http({
            method: 'GET',
            url: '/profile/pokemon/' + id
        }).then(function (response) {
            vm.profileArray = response.data;
            console.log(vm.profileArray);
        }).catch((error) => {
            console.log('Error getting Poke profile', vm.profileArray);
        });
    };

    //gets badges by indicated trainer
    function getProfileBadges(id) {
        //id = trainerSelect;
        console.log(id);
        $http({
            method: 'GET',
            url: '/profile/badges/' + id
        }).then(function (response) {
            vm.badgesArray = response.data;
            console.log(vm.badgesArray);
            getProfilePokemon(vm.trainerSelect);
        }).catch((error) => {
            console.log('Error getting badge profile', vm.badgesArray);
        });
    };

    getTrainerList();
   
}]); //end home controller