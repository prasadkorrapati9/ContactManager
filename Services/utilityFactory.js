contactManager.factory('utilityFactory', [function () {
    var getRandomNumber,
        findById,
        getContactsList;

    getRandomNumber =function getRandomIntInclusive() {
        var min = 1,
            max = 15;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    findById = function(contacts, id) {
        for(var i = 0; i < contacts.length; i++) {
            if(contacts[i].id === id ) {
                return i;
            }
        }
    };

    return {
        getRandomNumber: getRandomNumber,
        findById: findById,
        getContactsList: getContactsList
    }
}]);