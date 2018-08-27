hotelApp.controller('TrainerController', ['$http', '$mdDialog', function ($http, $mdDialog) {
    vm = this;
    vm.trainerArray = [];
    let loggedTrainer = '';
    vm.sortArray = [];
    function addNewTrainer(name) {
        let newTrainer = {
            name: name,
        }
        $http({
            method: 'POST',
            url: '/trainer',
            data: newTrainer
        }).then(function (response) {
            console.log('New Owner Added');
        }).catch(function (error) {
            alert('Unable to add you, new trainer', error)
            console.log('Error', error);
        });
    }//end addNewOwner

    function getTrainerProfile(trainer) {
        console.log('In getPetOwner', trainer);
        let newTrainer = {
            name: trainer,
        }
        console.log('In getPetOwner', newTrainer);
        $http({
            method: 'GET',
            url: '/trainer',
            data: newTrainer
        }).then(function (response) {
            vm.trainerArray = response.data;
            console.log('trainers', vm.trainerArray);
            sort();
        }).catch((error) => {
            console.log('Error in combo');
        });
    };//End getTrainerList


    vm.showPrompt = function (ev) {
        console.log('i hate angular');

        // Appending dialog to document.body to cover sidenav in docs app
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
            getTrainerProfile(loggedTrainer);
            vm.status = 'You decided to name your dog ' + result + '.';
        }, function () {
            vm.status = 'You didn\'t name your dog.';
        });
    };

    vm.showAdvanced = function (ev) {
        $mdDialog.show({
            controller: TrainerController,
            templateUrl: 'views/home.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: vm.customFullscreen // Only for -xs, -sm breakpoints.
        })
    }

    //   function loadPokemon(params) {     
    // }
}]);//end Owner Controller