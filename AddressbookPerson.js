class Person { 
//UC1
    //Property
    firstName;
    lastName;
    emailId;
    phoneNumber;
    zipCode;
    address;
    city;
    state;
    

    //Constructor
    constructor(firstName, lastName, emailId, phoneNumber, zipCode, address, city, state) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailId = emailId;
        this.phoneNumber = phoneNumber;
        this.zipCode = zipCode;
        this.address = address;
        this.city = city;
        this.state = state;
    }

    getfirstName() {
        return this.firstName;
    }
    getlastName() {
        return this.lastName;
    }
    getemailId() {
        return this.emailId;
    }
    getphoneNumber() {
        return this.phoneNumber;
    }
    getzipCode() {
        return this.zipCode;
    }
    getaddress() {
        return this.address;
    }
    getcity() {
        return this.city;
    }
    getstate() {
        return this.state;
    }
    editFullName(fullName) {
        const newFullNew = fullName.split(" "); 
        this.firstName = newFullNew[0];
        this.lastName = newFullNew[1];
    }

    checkForFirstName(firstname) {
        return this.getfirstName().includes(firstname); // ture if name is incuded in array 
    }
}

//UC 2:-
    /**
 *  Regex patterns
 */
/**
 * @purpose -> UC2 : Ability to ensure Valid Contacts are added...Contacts are added... 
 *          -  First Name and Last Name should start with Capital 
 *          -  Minimum 3 Characters Address, City and State should also have minimum 4 characters
 *          -  Zip, Phone and Email should be valid 
 *          -     
 * **/

     const pattern_NAME = /^[A-Z]{1}[a-z]{2,}$/;
     const pattern_EMAILID = /^[A-Za-z0-9.+-]*[a-zA-Z0-9]+[@][a-z0-9]+[.][a-z]+[.]?[a-z]+/;
     const pattern_PHONENUMBER = /(91\s)[5-9][0-9]{9}/;
     const pattern_ZipCode = /^[0-9]{5,10}/;
     const pattern_ADDRESS_CITY_STATE = /^[A-Za-z0-9.+,-\s]{4,}$/;


//UC3:-
/**
* @purpose -> UC3 : Ability to create a New Address Book array and add new
*                   Contacts to it.   
* **/

function addPerson(firstName, lastName, emailId, phoneNumber, zipCode, address, city, state) {
    let person = new Person(firstName, lastName, emailId, phoneNumber, zipCode, address, city, state);
    if (pattern_NAME.test(person.firstName) && pattern_NAME.test(person.lastName) && pattern_EMAILID.test(person.emailId) && pattern_PHONENUMBER.test(person.phoneNumber) && pattern_ZipCode.test(person.zipCode) && pattern_ADDRESS_CITY_STATE.test(person.address) && pattern_ADDRESS_CITY_STATE.test(person.city) && pattern_ADDRESS_CITY_STATE.test(person.state)) {
        return person;
    } else {
        console.log("Invalid Input!!!");
    }
}
console.log(addPerson("Subhashree","Naik","abc@gmail.com","91 1234567890","411017","near shiv","Pune","Maharastra"));

/**
 * @purpose -> UC4 : Ability to find existing contact person using their name and edit it 
 * 
 * @param {*} Array 
 * @param {*} firstName 
 * @param {*} fullName 
 * @returns It returns the updated array 
 */
 function findAndEditByName(Array, firstName, fullName) {
    for (let index = 0; index < Array.length; index++) {
        let element = Array[index];
        console.log(element);
        if (element.checkForFirstName(firstName) == true) {
            element.editFullName(fullName);
        }
    }
    return Array;
}

let personArray1 = new Array(addPerson("Ram", "Patel", "rampatel@gmail.com", "91 8527418525", 456224, "near shiv temple", "Pune", "Maharastra"));
let personArray2 = new Array(addPerson("Syam", "Naik", "syamnaik@gmail.com", "91 9008622627", 560037, "near balaji temple", "Bbhubaneswar", "Odisha"));
let personArray3 = new Array(addPerson("Gita", "Gupta", "gitagupta@gmail.com", "91 8527419643", 560001, "near marketing building", "Bhubaneswar", "Odisha"));
let addressBook = new Array(...personArray1, ...personArray2, ...personArray3); 
 console.log(addressBook);

console.log(findAndEditByName(addressBook, "Ram", "Ram kumar Naik")); // UC4 edit person

/**
 * @purpose -> UC5 : Ability to find a person with name delete it from the array
 * @param {*} Array 
 * @param {*} firstName 
 * @returns It returns the updated array 
 */
 function deletePersonFromArray(Array, firstName) {
    for (let index = 0; index < Array.length; index++) {
        const element = Array[index];
        if (element.getfirstName() == firstName) {
            Array.splice(element.getfirstName, 1)
        }
    }
    return Array;
}
console.log(deletePersonFromArray(addressBook, "Ram", "Ram kumar Naik")); 

