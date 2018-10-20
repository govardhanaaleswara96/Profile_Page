// Create a Module
var app = angular.module('ContactApp',[]);

// Create a Controller
app.controller('ContactAppCtrl',function($scope) {
    var contactList = [
            {
                name:'Virat Kohli',
                img:'img/profile-image-1.jpeg',
                gender:'Male',
                DOB:'01/01/1993',
                TelNo:73339289198,
                nick:'vir',
                language:'engilsh'

            },
            {
                name:'Barack Obama',
                img:'img/profile-image-2.jpg',
                gender:'Male',
                DOB:'01/01/1993',
                TelNo:73339289198,
                nick:'obama',
                language:'engilsh'
            },
            {
                name:'Tony Stark ',
                img:'img/profile-image-3.jpg',
                gender:'Male',
                DOB:'01/01/1993',
                TelNo:73339289198,
                nick:'tony',
                language:'engilsh'
            },
            {
                name:'Ranbir Kapoor',
                img:'img/profile-image-4.jpeg',
                gender:'Male',
                DOB:'01/01/1993',
                TelNo:73339289198,
                nick:'sanjiu',
                language:'engilsh'
            },
            {
                name:'Bill Gates',
                img:'img/profile-image-5.jpg',
                gender:'Male',
                DOB:'01/01/1993',
                TelNo:73339289198,
                nick:'bill',
                language:'engilsh'
            },
            {
                name:'Steve Jobs',
                img:'img/profile-image-6.jpg',
                gender:'Male',
                DOB:'01/01/1993',
                TelNo:73339289198,
                nick:'jobs',
                language:'engilsh'
            },
            ]
            $scope.contactList = contactList;

            // $scope.contactArray = [];

            $scope.selectedPerson = null;

            // $scope.contactArray  = contactList;

            $scope.selectAContact = function(index) {
                $scope.selectedPerson = $scope.contactList[index];
            };
        
});

