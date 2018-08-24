hotelApp.controller('HomeController', ['$http', function($http){
    vm = this;
    console.log('HomeController Loaded');
    
    vm.addNewPet = function (){
        let newPet ={
            name:vm.nameIn,
            type:vm.typeIn,
            description:vm.notesIn,
            checked_in:vm.checkIn,
            owner_id:vm.ownerPin,
        }
        console.log(newPet);
        
    }

}]); //end home controller