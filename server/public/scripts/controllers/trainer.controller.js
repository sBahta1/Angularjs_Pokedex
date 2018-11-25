hotelApp.controller('TrainerController', ['$http', '$mdDialog', function ($http, $mdDialog) {
    vm = this;
    vm.trainerArray = [];
    let loggedTrainer = '';
    vm.pokedexArray = [];
    vm.profileArray = [];


    function addNewTrainer(name) {
        let newTrainer = {
            name: name,
        }
        $http({
            method: 'POST',
            url: '/trainer/new',
            data: newTrainer
        }).then(function (response) {
            console.log('New Owner Added');
        }).catch(function (error) {
            alert('Unable to add you, new trainer', error)
            console.log('Error', error);
        });
    }//end addNewOwner



    //prompt to add a new trainer 
    vm.showPrompt = function (ev) {
        var confirm = $mdDialog.prompt()
            .title('Welcome Back Trainer!')
            .textContent('Enter your name to sign-in')
            .placeholder('Trainer')
            .ariaLabel('Trainer sign in')
            .targetEvent(ev)
            .required(true)
            .ok('Okay!')
            .cancel('Nevermind');

        $mdDialog.show(confirm).then(function (result) {
            loggedTrainer = result
            // console.log(loggedTrainer);
            addNewTrainer(loggedTrainer);
            vm.status = result;
        }, function () {
            vm.status = 'Next time maybe';
        });
    };

    function getProfile(id) {
        $http({
            method: 'GET',
            url: '/trainer/profile' + id
        }).then(function (response) {
            vm.profileArray = response.data;
            console.log(vm.profileArray);
        }).catch((error) => {
            console.log('Error getting Pokedex');
        });
    };

    vm.removeEntry = function (id, poke) {
        console.log(id, poke);
        $http({
            method: 'DELETE',
            url: '/trainer/remove/' + id + '/' + poke
        }).then(function (response) {
            // console.log('entry deleted',response.data);
            getPokedex()
        }).catch((error) => {
            console.log('Error deleting entry');
        });
    };

    function getPokedex() {
        $http({
            method: 'GET',
            url: '/trainer/pokedex'
        }).then(function (response) {
            vm.pokedexArray = response.data;
            //  console.log(vm.pokedexArray);

        }).catch((error) => {
            console.log('Error getting Pokedex');
        });
    };

    getPokedex();
    getProfile();
}]);//end Owner Controller