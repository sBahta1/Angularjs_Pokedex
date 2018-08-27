hotelApp.controller('HomeController', ['$http', '$mdDialog', function ($http, $mdDialog) {
    vm = this;
    console.log('HomeController Loaded');
    vm.loggedTrainer = '';
    

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