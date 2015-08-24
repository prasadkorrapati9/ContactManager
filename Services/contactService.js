contactManager.service('contactService', ['utilityFactory', function(utilityFactory) {
    var contactList = [
        {
            id: 1,
            name : 'Terrence S. Hatfield',
            tel: '651-603-1723',
            email: 'TerrenceSHatfield@rhyta.com',
            image: 'images/faces/' + utilityFactory.getRandomNumber()+'.jpg'
        },
        {
            id: 2,
            name : 'Chris M. Manning',
            tel: '513-307-5859',
            email: 'ChrisMManning@dayrep.com',
            image: 'images/faces/' + utilityFactory.getRandomNumber()+'.jpg'
        },
        {
            id: 3,
            name : 'Ricky M. Digiacomo',
            tel: '918-774-0199',
            email: 'RickyMDigiacomo@teleworm.us',
            image: 'images/faces/' + utilityFactory.getRandomNumber()+'.jpg'
        },
        {
            id: 4,
            name : 'Michael K. Bayne',
            tel: '702-989-5145',
            email: 'MichaelKBayne@rhyta.com',
            image: 'images/faces/' + utilityFactory.getRandomNumber()+'.jpg'
        },
        {
            id: 5,
            name : 'John I. Wilson',
            tel: '318-292-6700',
            email: 'JohnIWilson@dayrep.com',
            image: 'images/faces/' + utilityFactory.getRandomNumber()+'.jpg'
        },
        {
            id: 6,
            name : 'Rodolfo P. Robinett',
            tel: '803-557-9815',
            email: 'RodolfoPRobinett@jourrapide.com',
            image: 'images/faces/' + utilityFactory.getRandomNumber()+'.jpg'
        }
    ];

    this.getContactsList = function() {
        return contactList;
    };

    this.getSelectedContact = function(id) {
        for(var i = 0; i < contactList.length; i++) {
            if(contactList[i].id == id ) {
                return contactList[i];
            }
        }
    };

    this.addContact = function(contact) {
        contactList.push(contact);
    };

    this.updateContact = function(contact) {
//        contactList[index] = contact;
        for(var i = 0; i < contactList.length; i++) {
            if(contactList[i].id == contact.id){
                contactList[i] = contact;
            }
        }
    };
}]);