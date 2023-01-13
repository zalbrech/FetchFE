import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MyForm from './components/MyForm.js';
import userEvent from "@testing-library/user-event";
// import { fetch } from 'node-fetch';

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

const theScheme = "https://";
const theDomain = "frontend-take-home.fetchrewards.com/";
const theSubdirectory = "form";

const goodUrl = `${theScheme}${theDomain}${theSubdirectory}`;
const badUrl = `${theScheme}${theSubdirectory}`;

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

describe(MyForm, () => {
    // beforeEach(() => {
    //     render(<MyForm/>);
    // });

    initBlank(() => {
        render(<MyForm/>);
    });

    function initWithValues(theName, theEmail, thePassword, theOccupation, theState) {
        render(<MyForm name={theName} email={theEmail} password={thePassword} occupation={theOccupation} state={theState}/>);
    }

    test('on init, submit button renders', () => {
        initBlank();
        expect(screen.getByRole('formSubmitButton')).toBeInTheDocument();
    });

    // test that form inputs can be changed

    // name
    test('name text can change', () => {
        initBlank();
        const input = screen.getByLabelText("Name");
        fireEvent.change(input, { target: { value: 'Bob'} })
        // expect(hasInputValue(input, "Bob")).toBe(true)
        expect(input.value).toBe('Bob');
    });

    // email
    test('email text can change', () => {
        initBlank();
        const input = screen.getByLabelText("Email address");
        fireEvent.change(input, { target: { value: 'thisEmail123'} });
        expect(input.value).toBe('thisEmail123');
    });

    // password
    test('pasword text can chagne', () => {
        initBlank();
        const input = screen.getByLabelText("Password");
        fireEvent.change(input, { target: {value: 'mypassword'} });
        expect(input.value).toBe('mypassword');
    });

    // occupation
    test('occupation can change', () => {
        const input = screen.getByTestId("occupation-test-id");
        // fireEvent.change(input, { target: {value: 'Janitor'} });
        userEvent.selectOptions(input, [
            "Janitor",
          ]);
        expect(input.value).toBe('Janitor');
    }); 

    // state
    test('state of residence can change', () => {
        const input = screen.getByLabelText("State");
        fireEvent.change(input, { target: {value: 'Wisconsin'} });
        expect(input.value).toBe('Wisconsin');
    });

    //TODO: Write tests for input validation

    // test("form fields render with values", () => {
    //     const theForm = initWithValues(validName, validEmail, validPassword, validOccupation, validState);
        
    // });
})





