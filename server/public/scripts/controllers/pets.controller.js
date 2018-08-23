app.controller('PetsController', function ($http){
    vm = this
    vm.petArray = [];
    
    getPets();

    function getPets() {
        console.log('In getRentalList');
        $http({
            method: 'GET',
            url: '/' //untill individual router made
        }).then(function (response) {
            console.log('PetsController GET Listings', response.data);
            vm.rentalArr = response.data;
        }).catch((error) => {
            console.log('Error in getPets', error);
        });
    };


})//end PetsController