contactManager.controller('mainController', ['$scope', '$log', '$location', 'utilityFactory', 'contactService', function($scope, $log, $location, utilityFactory, contactService) {
    $scope.contacts = contactService.getContactsList();

    $scope.redirectToAddPage = function() {
        $location.path('/add');
    }

    $scope.deleteContact = function(index) {
        $scope.contacts.splice(index, 1);
    }
}]);