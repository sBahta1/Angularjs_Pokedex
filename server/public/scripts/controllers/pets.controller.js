hotelApp.controller('PetsController',['$http', function ($http){
    vm = this
    vm.petArray = [];
    
    getPets();

    function getPets() {
        console.log('In getRentalList');
        $http({
            method: 'GET',
            url: '/pets' //untill individual router made
        }).then(function (response) {
            console.log('PetsController GET Listings', response.data);
            vm.rentalArr = response.data;
        }).catch((error) => {
            console.log('Error in getPets', error);
        });
    };

function getPetOwner() {
    console.log('In getPetOwner');
    $http()
}

}]);//end PetsController