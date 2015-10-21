contactManager.directive("contactTile", function() {
    return {
        restrict: 'AECM',
        templateUrl: 'directives/contactTile.html',
        replace: true,
        scope: {
            contactObject: "=",
            index: '=',
            deleteContact: "&"
        },
        controller: function($scope) {
//            console.log($scope.contactObject);
        }
    }
});
