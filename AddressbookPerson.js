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






