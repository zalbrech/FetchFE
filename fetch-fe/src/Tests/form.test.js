import myForm from 'fetch-fe\src\components\MyForm.js';

const validName = "Joe";
const validEmail = "thesmile123@gmail.com";
const validPassword = "password";
const validOccupation = "Ceo";
const validState = "Pennsylvania";

const invalidName = ''; // only possible invalid is blank
const invalidEmail = '123{.co';
const invalidPassword ='12345';
const invalidOccupation = ''; // only possible invalid is blank
const invalidState = ''; // only possible invalid is blank

// invalid name test
const badName = {
    name: invalidName,
    email: validEmail,
    password: validPassword,
    occupation: validOccupation,
    state: validState,
}

// invalid email test
const badEmail = {
    name: validName,
    email: invalidEmail,
    password: validPassword,
    occupation: validOccupation,
    state: validState,
}

// invalid password test
const badPasword = {
    name: validName,
    email: validEmail,
    password: invalidPassword,
    occupation: validOccupation,
    state: validState,
}

// invalid occupation test
const badOccupation = {
    name: validName,
    email: validEmail,
    password: validPassword,
    occupation: invalidOccupation,
    state: validState,
}

// invalid state test
const badState = {
    name: validName,
    email: validEmail,
    password: validPassword,
    occupation: validOccupation,
    state: invalidState,
}







