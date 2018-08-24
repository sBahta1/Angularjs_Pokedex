hotelApp.controller('PetsController',['$http', function ($http){
    vm = this
    vm.petArray = [];
    vm.comboArray = [];
    getPets();
  // getPetOwner();
    function getPets() {
        console.log('In get pets');
        $http({
            method: 'GET',
            url: '/pets' 
        }).then(function (response) {
            vm.petArray = response.data;
            console.log('PetsController GET', vm.petArray);
        }).catch((error) => {
            console.log('Error in getPets', error);
        });
    };

vm.deleteEntry = function (id){
    console.log('In Delete Entry', id);
    $http({
        method:'DELETE',
        url:'/pets/' + id
    }).then(function(response){
        console.log('Entry deleted',response);
        getPets();
    }).catch(function(error){
        console.log('Could not delete', error);
    });
};    

function getPetOwner() {
    console.log('In getPetOwner');
    $http({
        method:'GET',
        url:'/pets/combo'
    }).then(function(response){ 
        vm.comboArray = response.data;
        console.log('petcontr combo', vm.comboArray);        
    }).catch((error)=>{
        console.log('Error in combo');
    });
};

}]);//end PetsController