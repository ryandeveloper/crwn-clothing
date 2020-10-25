import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from 'react-redux';

import './App.css';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import LoginRegisterPage from './pages/login-register/login-register.component';
import ShopPage from './pages/shop/shop.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {

   unsubscribeFromAuth = null;

   componentDidMount() {
      const { setCurrentUser } = this.props;

      this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
         //this.setState({ currentUser: user });
         if (userAuth) {
            const userRef = await createUserProfileDocument(userAuth);

            userRef.onSnapshot(snapShot => {
               setCurrentUser({
                  id: snapShot.id,
                  ...snapShot.data()
               })
               // console.log(this.state);
            });

         } else {
            setCurrentUser(userAuth)
         }
      })
   }

   componentWillUnmount() {
      this.unsubscribeFromAuth();
   }

   render() {
      return (
         <div>
            <Header />
            <Switch>
               <Route exact path='/' component={HomePage} />
               <Route exact path='/shop' component={ShopPage} />
               <Route exact path='/login' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<LoginRegisterPage />)} />
            </Switch>
         </div>
      );
   }

}

const mapStateToProps = ({ user }) => ({
   currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
   setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(App);