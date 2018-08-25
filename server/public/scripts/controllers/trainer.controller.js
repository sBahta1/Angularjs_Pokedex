hotelApp.controller('TrainerController', function ($http) {
    vm = this;
    vm.trainerArray = [];

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

    function getTrainerList() {
        console.log('In getPetOwner');
        $http({
            method: 'GET',
            url: '/trainer'
        }).then(function (response) {
            vm.trainerArray = response.data;
            console.log('trainers', vm.trainerArray);
        }).catch((error) => {
            console.log('Error in combo');
        });
    };//End getTrainerList

    getTrainerList()
});//end Owner Controller