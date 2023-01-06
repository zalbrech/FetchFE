import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            occupation: '',
            state: '',
            nameError: '',
            passwordError: '',
            emailError: '',
            stateError: '',
            occupationError: '',
            theOccupations: [],
            theStates: [],
        };

        console.log('in constructor');

        this.populateArrays();
    }

    populateArrays = async () => {
        // console.log('rest api called');
        const response = await fetch("https://frontend-take-home.fetchrewards.com/form");
        const jsonResponse = await response.json();
        console.log(jsonResponse);

        this.theOccupations = jsonResponse.occupations;
        this.theStates = jsonResponse.states;
        // console.log(this.theOccupations);
        // console.log(this.theStates);
    };

    validateForm = () => {
        let nameError = '';
        let emailError = '';
        let passwordError = '';
        let stateError = '';
        let occupationError = '';

        if (this.state.name.length < 1) {
            console.log("name error")
            console.log(this.state.name);
            nameError = 'Name cannot be blank';
        }

        // PLACEHOLDER
        if (!this.state.email.includes('@')) {
            console.log("email error")

            emailError = 'Invalid email';
        }

        // PLACEHOLDER
        if (this.state.password.length < 6) {
            console.log("password error")

            passwordError = 'Password must be at least 6 characters';
        }

        if (!this.state.state) {
            console.log("state error")

            stateError = 'State cannot be blank';
        }

        if (!this.state.occupation) {
            console.log("occupation error")

            // console.log(this.theOccupations);
            occupationError = 'Occupation cannot be blank'
        }

        if (emailError || nameError || passwordError || stateError || occupationError) {
            this.setState({ emailError, nameError, passwordError, stateError, occupationError });
            return false;
        }

        return true;
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const isValid = this.validateForm();
        console.log(isValid);
        if(!isValid) {
            
            event.stopPropagation();
        } else {
            console.log(this.state);
            // clear form on successful submit
            this.setState({
                name: '',
                email: '',
                password: '',
                nameError: '',
                emailError: '',
                passwordError: '',
                occupationError: '',
                stateError: '',
            });
        }
    };

    handleChange = (event) => {
        // console.log(event)
        // console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value
        });
    };


    render() {
        return (
            <div className="h-100 justify-content-center align-items-center form">
                <div className="title">Welcome</div>
                <div className="subtitle">Please complete the form to sign up!</div>
                <Form onSubmit={this.handleSubmit}>

                    {/* name */}
                    <Form.Group className="ic1 mb-3" controlId="formBasicEmail" >
                        <Form.Label className="text-white">Name</Form.Label>
                        <Form.Control required name="name" type="name" placeholder="Enter first and last name" onChange={this.handleChange}/>
                    </Form.Group>

                    {/* email */}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-white">Email address</Form.Label>
                        <Form.Control required name="email" type="email" placeholder="Enter email" onChange={this.handleChange}/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    {/* password */}
                    <Form.Group className="mb-3" controlId="formBasicPassword" >
                        <Form.Label className="text-white">Password</Form.Label>
                        <Form.Control required  name="password" type="password" placeholder="Password" onChange={this.handleChange}/>
                        <Form.Text className="text-muted">
                            Passowrd must be at least 6 characters long.
                        </Form.Text>
                    </Form.Group>

                    {/* occupation */}
                    <Form.Group className="ic2" >
                        <Form.Label className="text-white">Occupation</Form.Label>
                        <Form.Select required name="occupation" className="text-center" onChange={this.handleChange}>
                            <option>-- Select Occupation --</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Form.Group>

                    {/* state */}
                    <Form.Group className="ic1" >
                        <Form.Label className="text-white">State</Form.Label>
                        <Form.Select required name="state" className="text-center" onChange={this.handleChange}>
                            <option>-- Select State of residence --</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Form.Group>


                    <Button className="submit"
                        variant="primary" type="submit">
                            Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

export default MyForm