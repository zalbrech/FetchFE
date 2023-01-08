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
            theData: {
                occupations: [],
                states: [
                    {
                        name: '',
                        abbreviation: '',
                    }
                ]
            },
        };
    }


    // retrieve data from API to populate dropdown menus
    componentDidMount() {
        fetch("https://frontend-take-home.fetchrewards.com/form")
            .then(res => res.json())
            .then((data) =>
                this.setState({ theData: data }));
    }

    // check form for missing/incorrect fields. If any errors are found, the form will not submit
    validateForm = () => {
        this.setState({
            nameError: '',
            emailError: '',
            passwordError: '',
            occupationError: '',
            stateError: '',
        });

        let nameError = '';
        let emailError = '';
        let passwordError = '';
        let stateError = '';
        let occupationError = '';

        const emailRegex = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

        if (!this.state.name) {
            // console.log("name error")
            nameError = 'Name cannot be blank';
        }

        if (!this.state.email || !emailRegex.test(this.state.email)) {
            // console.log("email error")
            emailError = 'Invalid email';
        }

        if (!this.state.password || this.state.password.length < 6) {
            // console.log("password error")
            passwordError = 'Password must be at least 6 characters';
        }

        if (!this.state.state || this.state.state === '-- Select State of residence --') {
            // console.log("state error")
            stateError = 'State cannot be blank';
        }

        if (!this.state.occupation || this.state.occupation === '-- Select Occupation --') {
            // console.log("occupation error")
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
        if (isValid) {
            const myObj = {
                "name": this.state.name,
                "email": this.state.email,
                "password": this.state.password,
                "occupation": this.state.occupation,
                "state": this.state.state,
            }

            console.log(myObj);

            fetch('https://frontend-take-home.fetchrewards.com/form', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(myObj)
            }).then((response) => {
                if (!response.ok) {
                    throw new Error(response.status);
                }
            }).then(() => {
                alert('Form submission successful!')
                // clear form only on successful submit
                this.setState({
                    name: '',
                    email: '',
                    password: '',
                    occupation: '',
                    state: '',
                    nameError: '',
                    emailError: '',
                    passwordError: '',
                    occupationError: '',
                    stateError: '',
                });
            }).catch((error) => {
                console.log('error: ' + error);
                alert('Something went wrong!');
            });
        }
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    render() {
        const { theData } = this.state;
        return (
            <div className="h-100 justify-content-center align-items-center form">
                <div className="title">Welcome</div>
                <div className="subtitle">Please complete the form to sign up!</div>
                <Form onSubmit={this.handleSubmit}>

                    {/* name */}
                    <Form.Group className="ic1 mb-3" controlId="formBasicName" >
                        <Form.Label className="text-white">Name</Form.Label>
                        <Form.Control name="name"
                            type="name"
                            value={this.state.name}
                            placeholder="Enter first and last name"
                            onChange={this.handleChange} isInvalid={this.state.nameError} />
                        <Form.Control.Feedback type="invalid">
                            Please enter your name
                        </Form.Control.Feedback>
                    </Form.Group>

                    {/* email */}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-white">Email address</Form.Label>
                        <Form.Control name="email"
                            type="text"
                            value={this.state.email}
                            placeholder="Enter email"
                            onChange={this.handleChange} isInvalid={this.state.emailError} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                        <Form.Control.Feedback type="invalid">
                            Please enter a valid email
                        </Form.Control.Feedback>
                    </Form.Group>

                    {/* password */}
                    <Form.Group className="mb-3" controlId="formBasicPassword" >
                        <Form.Label className="text-white">Password</Form.Label>
                        <Form.Control name="password"
                            type="password"
                            value={this.state.password}
                            placeholder="Password"
                            onChange={this.handleChange} isInvalid={this.state.passwordError} />
                        <Form.Text className="text-muted">
                            Passowrd must be at least 6 characters long.
                        </Form.Text>
                        <Form.Control.Feedback type="invalid">
                            Please enter a valid password
                        </Form.Control.Feedback>
                    </Form.Group>

                    {/* occupation */}
                    <Form.Group className="ic2" >
                        <Form.Label className="text-white">Occupation</Form.Label>
                        <Form.Select as="select" name="occupation"
                            className="text-center"
                            value={this.state.occupation}
                            onChange={this.handleChange} isInvalid={this.state.occupationError}>
                            <option>-- Select Occupation --</option>
                            {theData.occupations.map((item, i) => (
                                <option key={i} value={i}>
                                    {item}
                                </option>
                            ))}
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                            Please select an occupation
                        </Form.Control.Feedback>
                    </Form.Group>

                    {/* state */}
                    <Form.Group className="ic1" >
                        <Form.Label className="text-white">State</Form.Label>
                        <Form.Select name="state" className="text-center"
                            value={this.state.state}
                            onChange={this.handleChange} isInvalid={this.state.stateError}>
                            <option>-- Select State of residence --</option>
                            {theData.states.map((item, i) => (
                                <option key={i} value={i}>
                                    {item.name}
                                </option>
                            ))}
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                            Please enter a state
                        </Form.Control.Feedback>
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