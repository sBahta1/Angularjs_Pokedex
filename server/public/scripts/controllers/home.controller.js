hotelApp.controller('HomeController', ['$http', '$mdDialog', function ($http, $mdDialog) {
    vm = this;
    console.log('HomeController Loaded');
    vm.loggedTrainer = '';
    
    // vm.addNewPet = function () {
    //     let newPet = {
    //         name: vm.nameIn,
    //         type: vm.typeIn,
    //         description: vm.notesIn,
    //         checked_in: vm.checkIn,
    //         owner_id: vm.ownerPin,
    //     }
    //     console.log(newPet);
    //     $http({
    //         method: 'POST',
    //         url: '/hotel', 
    //         data: newPet
    //     }).then(function (response) {
    //         console.log('New Pet Added');
    //     }).catch(function (error) {
    //         alert('Unable to add you new pet', error)
    //         console.log('Error', error);
    //     });
    // };//end addNewPet
    
    vm.showPrompt = function(ev) {
        
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
    
        $mdDialog.show(confirm).then(function(result) {
            vm.loggedTrainer = result
            console.log(loggedTrainer);
            
          vm.status = 'You decided to name your dog ' + result + '.';
        }, function() {
          vm.status = 'You didn\'t name your dog.';
        });
      };
    
      vm.showAdvanced = function(ev) {
        $mdDialog.show({
          controller: HomeController,
          templateUrl: 'views/home.html',
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose:true,
          fullscreen: vm.customFullscreen // Only for -xs, -sm breakpoints.
        })
    }

    vm.addNewtrainer = function () {
        let newTrainer = {
            name:vm.nameIn,
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

}]); //end home controller