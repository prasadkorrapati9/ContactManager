var contactManager = angular.module('contactManager', ['ngRoute']);

contactManager.config(function ($routeProvider) {
    
    $routeProvider

    .when('/contacts', {
        templateUrl: 'pages/contacts.html',
        controller: 'mainController'
    })
    
    .when('/add', {
        templateUrl: 'pages/add.html',
        controller: 'addController'
    })
    
    .when('/edit/:id', {
        templateUrl: 'pages/edit.html',
        controller: 'editController'
    })
    
});


/*
contactManager.directive("searchResult", function() {
   return {
       restrict: 'AECM',
       templateUrl: 'directives/searchresult.html',
       replace: true,
       scope: {
           personObject: "=",
           formattedAddressFunction: "&"
       }
   }
});
*/