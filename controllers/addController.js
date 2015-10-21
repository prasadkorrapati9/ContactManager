contactManager.controller('addController',['$scope', '$location', 'utilityFactory', 'contactService', function($scope, $location,  utilityFactory, contactService) {

    $scope.addContact = function () {
        var contactsList = contactService.getContactsList();
        console.log(_.max(_.pluck(contactsList, 'id')));
        contactService.addContact({
            id: _.max(_.pluck(contactsList, 'id')) + 1,
            name: $scope.fullName,
            tel: $scope.telephone,
            email: $scope.email,
            image: 'images/faces/' + utilityFactory.getRandomNumber() + '.jpg'
        });
        $location.path('/contacts');
    };
}]);