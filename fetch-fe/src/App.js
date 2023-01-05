import useState from 'react';
import React from 'react';
import MyForm from './components/MyForm'

function App() {
  return (
    <div className="d-flex align-items-center justify-content-center wrapper">
      <MyForm />
    </div>
  )
}

export default App


// class Form extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: '',
//       email: '',
//       password: '',
//       occupation: '',
//       state: '',
//       nameError: '',
//       passwordError: '',
//       emailError: '',
//       stateError: '',
//       occupationError: '',
//       theOccupations: [],
//       theStates: [],
//     };

//     this.populateArrays();
//   }

//   populateArrays = async () => {
//     // console.log('rest api called');
//     const response = await fetch("https://frontend-take-home.fetchrewards.com/form");
//     const jsonResponse = await response.json();
//     console.log(jsonResponse);

//     this.theOccupations = jsonResponse.occupations;
//     this.theStates = jsonResponse.states;
//     // console.log(this.theOccupations);
//     // console.log(this.theStates);
//   };

//   validateForm = () => {
//     let nameError = '';
//     let emailError = '';
//     let passwordError = '';
//     let stateError = '';
//     let occupationError = '';

//     if (this.state.name.length < 1) {
//       nameError = 'Name cannot be blank';
//     }

//     // PLACEHOLDER
//     if (!this.state.email.includes('@')) {
//       emailError = 'Invalid email';
//     }

//     // PLACEHOLDER
//     if (this.state.password.length < 6) {
//       passwordError = 'Password must be at least 6 characters';
//     }

//     if (!this.state.state) {
//       stateError = 'State cannot be blank';
//     }

//     if (!this.state.occupation) {
//       console.log(this.theOccupations);
//       occupationError = 'Occupation cannot be blank'
//     }

//     if (emailError || nameError || passwordError) {
//       this.setState({ emailError, nameError, passwordError, stateError, occupationError });
//       return false;
//     }

//     return true;
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();
//     const isValid = this.validateForm();
//     if (isValid) {
//       console.log(this.state);
//       // clear form on successful submit
//       this.setState({
//         name: '',
//         email: '',
//         password: '',
//         nameError: '',
//         emailError: '',
//         passwordError: '',
//         occupationError: '',
//         stateError: '',
//       });
//     }
//   };

//   handleChange = (event) => {
//     this.setState({
//       [event.target.name]: event.target.value,
//     });
//   };

//   render() {
//     return (
//       <div className="centered">
//         <form className="form" onSubmit={this.handleSubmit}>
//           <div className="title">Welcome</div>
//           <div className="subtitle">Let's create your account!</div>

//           {/* name  */}
//           <div className="input-container ic1">
//             <input className="input"
//               name="name"
//               placeholder="Name"
//               value={this.state.name}
//               onChange={this.handleChange}
//             />
//             <div className="error">{this.state.nameError}</div>
//           </div>
//           {/* email */}
//           <div className="input-container ic2">
//             <input className="input"
//               name="email"
//               placeholder="Email"
//               value={this.state.email}
//               onChange={this.handleChange}
//             />
//             <div className="error">{this.state.emailError}</div>
//           </div>

//           {/* password */}
//           <div className="input-container ic2">
//             <input className="input"
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={this.state.password}
//               onChange={this.handleChange}
//             />
//             <div className="error">{this.state.passwordError}</div>
//           </div>

//           {/* occupation */}
//           <div className="input-container ic2">
//             <input className="input"
//               name="occupation"
//               placeholder="Occupation"
//               value={this.state.occupation}
//               onChange={this.handleChange}
//             />
//             <div className="error">{this.state.occupationError}</div>
//           </div>

//           {/* state */}
//           <div className="input-container ic2">
//             <input className="input"
//               name="state"
//               placeholder="State"
//               value={this.state.state}
//               onChange={this.handleChange}
//             />
//             <div className="error">{this.state.stateError}</div>
//           </div>

//           {/* submit */}
//           <div className="input-container ic1">
//             <button className="submit" type="submit">Submit</button>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// export default Form;