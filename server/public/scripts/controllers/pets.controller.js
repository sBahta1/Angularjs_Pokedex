hotelApp.controller('PetsController',['$http', function ($http){
    vm = this
    vm.petArray = [];
    vm.comboArray = [];
    getPets();
    getPetOwner();
    function getPets() {
        console.log('In get pets');
        $http({
            method: 'GET',
            url: '/pets' 
        }).then(function (response) {
            console.log('PetsController GET', response.data);
            vm.rentalArr = response.data;
        }).catch((error) => {
            console.log('Error in getPets', error);
        });
    };

function getPetOwner() {
    console.log('In getPetOwner');
    $http({
        method:'GET',
        url:'/pets/combo'
    }).then(function(response){
        console.log('petcontr combo', response.data);
        vm.comboArray = response.data;        
    }).catch((error)=>{
        console.log('Error in combo');
    });
};

}]);//end PetsController