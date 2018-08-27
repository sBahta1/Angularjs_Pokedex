hotelApp.controller('ProfileController', ['$http', function ($http) {
    vm = this;
    console.log('ProfileController Loaded');
    vm.badgesArray = [];
    vm.profileArray = [];
    vm.trainerList = [];

    
    vm.fireAway = function (){
        getProfileBadges(vm.trainerSelect); 
        
    }

    function getTrainerList() {
        $http({
            method: 'GET',
            url: '/trainer',
        }).then(function (response) {
            vm.trainerList = response.data;
            console.log('trainers', vm.trainerList);
        }).catch((error) => {
            console.log('Error in combo');
        });
    };//End getTrainerList
//gets pokemon by indicated trainer
    function getProfilePokemon(id) {
        //id = trainerSelect;
        console.log(id);
        $http({
            method:'GET',
            url:'/profile/pokemon/' + id
        }).then(function(response){
         vm.profileArray = response.data;
         console.log(vm.profileArray);
        }).catch((error)=>{
            console.log('Error getting Poke profile',vm.profileArray);
        });
    };

//gets badges by indicated trainer
function getProfileBadges(id) {
   //id = trainerSelect;
    console.log(id);
    $http({
        method:'GET',
        url:'/profile/badges/' + id
    }).then(function(response){
     vm.badgesArray = response.data;
     console.log(vm.badgesArray);
     getProfilePokemon(vm.trainerSelect);
    }).catch((error)=>{
        console.log('Error getting badge profile',vm.badgesArray);
    });
};
//getProfileBadges(); 
//getProfilePokemon();
getTrainerList()
// vm.addNewtrainer = function () {
    //     let newTrainer = {
    //         name:vm.nameIn,
    //     }
    //     $http({
    //         method: 'POST',
    //         url: '/trainer',
    //         data: newTrainer
    //     }).then(function (response) {
    //         console.log('New Owner Added');
    //     }).catch(function (error) {
    //         alert('Unable to add you, new trainer', error)
    //         console.log('Error', error);
    //     });
    // }//end addNewOwner

}]); //end home controller