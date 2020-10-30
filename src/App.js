import React, { Component, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import Register from './components/AuthO/Register';
import Logout from './components/AuthO/Logout';
import Home2 from './Pages/Home/Home2';
import Navbars from './components/Navbars';
import { useState } from 'react';
import { useStateValue } from './components/ContextApi/StateProvider';
import getCookie from './components/Cookies/GetCookie';
import setCookie from './components/Cookies/SetCookie';
import url from './components/BaseUrl/BaseUrl';
import Login from './components/AuthO/LogIn';
//import PrivateRoute from './components/Auth/PrivateRoute';
import Footer from './components/Footer';
import { CHEK_USER } from './components/ContextApi/Types';
import Checkout from './Pages/Checkout/Checkout';

const App = () => {

    const [state, setState] = useState({});
    const [state1, setState1] = useState({});
    const [{ fetchData, user }, dispatch] = useStateValue();

    const checkingCookieUser = () => {
        try {
            const user = getCookie('user');
            if (user) {
                addUser(user);
            } else {

            }
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        const getData = async () => {
            const result = await authListener("categoriesApi");
            if (result) {
                setState1({
                    data: result
                });
            }
        }
        getData();
        checkingCookieUser();
    }, []);

    const addUser = (user) => {
        dispatch({
            type: CHEK_USER,
            user: user,
        })
    }

    const authListener = async (apiController) => {
        const token = getCookie('token');
        const result = await fetch(url(apiController),
            {
                "headers": {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }
        )
            .then(data => data.json())
            .catch(err => console.log(err));

        return result;
    }


    return <div className="App">
        <header className="App-header">
            <Layout>
                <Router>

                    {/* Navigation bar */}
                    <Navbars />

                    <Switch>

                        <Route path="/AuthO/Register">
                            <Register />
                        </Route>
                        <Route path="/AuthO/LogIn">
                            <Login />
                        </Route>
                        <Route path="/AuthO/Logout">
                            <Logout />
                        </Route>
                        <Route path="/Checkout">
                            <Checkout />
                        </Route>


                        <Route path="/">
                            <Home2 />
                        </Route>

                        <Route path="*">
                            [/* To Do Not Found page*/]
                            <Home2 />
                        </Route>
                    </Switch>
                    <Footer />
                </Router>

            </Layout>

        </header>
    </div>
}
export default App;

//const PrivateRoute = ({ component: Component, ...rest }) => {
//    var resut = authListener();
//    var rs = { ...rest };
//    var chek = false;
//    resut.then(res => res);
//    setTimeout(() => {
//        console.log(useraaa);
//        if (useraaa.email !== undefined) {
//            return <Route {...rest} render={(props) => (
//                chek ? <Component {...props} /> : <Redirect to="/Auth/LogIn" />
//            )
//            } />
//        }
//    }, 1000);

//    if (rs !== undefined) {
//        chek = true;
//    }

//    return <Route {...rest} render={(props) => (
//        chek ? <Component {...props} /> : <Redirect to="/Auth/LogIn" />
//    )
//    } />
//}

//async function authListener() {
//    let chek = false;
//    const users = await fire.auth().onAuthStateChanged(user => {
//        if (user) {
//            chek = true;
//        } else {
//        }
//    });
//    return chek;
//}