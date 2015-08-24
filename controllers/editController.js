contactManager.controller('editController', ['$scope', '$log', '$routeParams', 'contactService', 'utilityFactory', '$location', function($scope, $log, $routeParams, contactService, utilityFactory, $location) {
    var contactDetails = contactService.getSelectedContact($routeParams.id);
    console.log(contactDetails, $routeParams.id);

    $scope.fullName = contactDetails.name;
    $scope.email = contactDetails.email;
    $scope.telephone = contactDetails.tel;

    $scope.updateContact = function () {
        contactService.updateContact({
            id: $routeParams.id,
            name: $scope.fullName,
            tel: $scope.telephone,
            email: $scope.email,
            image: 'images/faces/' + utilityFactory.getRandomNumber()+'.jpg'
        });
        $location.path('/contacts');
    };

    $scope.redirectToHomePage = function () {
        $location.path('/contacts');
    };
}]);