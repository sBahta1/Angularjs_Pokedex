hotelApp.controller('OwnerController', function ($http) {
    vm = this;
    vm.ownerArray = [];

    vm.addNewOwner = function () {
        let newOwner = {
            name_first: vm.firstNameIn,
            name_last: vm.lastNameIn
        }
        $http({
            method: 'POST',
            url: '/hotel/owner',
            data: newOwner
        }).then(function (response) {
            console.log('New Owner Added');
        }).catch(function (error) {
            alert('Unable to add you, new owner', error)
            console.log('Error', error);
        });
    }//end addNewOwner

    function getPetOwner() {
        console.log('In getPetOwner');
        $http({
            method: 'GET',
            url: '/pets/combo'
        }).then(function (response) {
            vm.ownerArray = response.data;
            console.log('petcontr combo', vm.comboArray);
        }).catch((error) => {
            console.log('Error in combo');
        });
    };

    getPetOwner()
});//end Owner Controller