hotelApp.controller('HomeController', ['$http', function ($http) {
    vm = this;
    console.log('HomeController Loaded');

    vm.addNewPet = function () {
        let newPet = {
            name: vm.nameIn,
            type: vm.typeIn,
            description: vm.notesIn,
            checked_in: vm.checkIn,
            owner_id: vm.ownerPin,
        }
        console.log(newPet);
        $http({
            method: 'POST',
            url: '/hotel',
            data: newPet
        }).then(function (response) {
            console.log('New Pet Added');
        }).catch(function (error) {
            alert('Unable to add you new pet', error)
            console.log('Error', error);
        });
    };//end addNewPet

}]); //end home controller