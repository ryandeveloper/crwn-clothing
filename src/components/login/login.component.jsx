import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './login.styles.scss';

class Login extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         email: '',
         password: ''
      }
   }

   handleSubmit = async event => {
      event.preventDefault();

      const { email, password } = this.state;

      try {
         await auth.signInWithEmailAndPassword(email, password);
         this.setState({ email: '', password: '' });
      } catch (error){
         console.log(error);
      }

   }

   handleChange = event => {
      const { value, name } = event.target;
      this.setState({ [name]: value });
   }

   render() {
      return (
         <div className='login'>
            <h2 className='title'>I already have an account</h2>
            <span>Login with your email and password</span>

            <form onSubmit={this.handleSubmit}>
               <FormInput
                  type='email'
                  name='email'
                  value={this.state.email}
                  handleChange={this.handleChange}
                  label='Email'
                  required />

               <FormInput
                  type='password'
                  name='password'
                  value={this.state.password}
                  handleChange={this.handleChange}
                  label='Password'
                  required />

               <div className="buttons">
                  <CustomButton type='submit'>Login</CustomButton>
                  <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                     {' '}
                     Sign in with Google{' '}
                  </CustomButton>
               </div>

            </form>
         </div>
      )
   }
}

export default Login;