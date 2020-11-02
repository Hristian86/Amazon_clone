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
import Home from './Pages/Home/Home';
import Navbars from './components/Navbars';
import { useState } from 'react';
import { useStateValue } from './components/ContextApi/StateProvider';
import getCookie from './components/Cookies/GetCookie';
import setCookie from './components/Cookies/SetCookie';
import url from './components/BaseUrl/BaseUrl';
import Login from './components/AuthO/LogIn';
//import PrivateRoute from './components/Auth/PrivateRoute';
import Footer from './components/Footer';
import { CHECK_USER, GET_ITEMS } from './components/ContextApi/Types';
import Checkout from './Pages/Checkout/Checkout';
import Payment from './Pages/Payment/Payment';
import AdminPage from './Pages/AdminPage/AdminPage';
import FetchData from './components/AuthListener/FetchData';
import Categories from './Pages/Categories/Categories';
import NotFound from './Pages/NotFoundPage/NotFount';

const App = () => {

    const [state, setState] = useState({});
    const [categoryState, setCategoryState] = useState({
        load: false
    });
    const [state1, setState1] = useState({});
    const [{ fetchData, user }, dispatch] = useStateValue();

    // Chekcing user cookies and create a user object in the context api store if it exists.
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

    // Fetching categories data from back end.
    const fetchDataFromApi = (data) => {
        console.log("fetching...");
        dispatch({
            type: GET_ITEMS,
            fetcheData: {
                items: data.categories
            },
        });
    }

    let interval;
    
    useEffect(() => {
        const getData = async () => {
            const result = await dataListener("api/categoriesApi");
            if (result) {
                const res = JSON.parse(result.geoLocation);
                console.log(res);
                setCategoryState({
                    load: true
                });
                fetchDataFromApi(result);
                //clearInterval(interval);
            }
        }

        //if (!categoryState.load) {
        //    console.log(categoryState);
        //    interval = setInterval(() => {
        //        if (!categoryState.load) {
        //            getData();
        //        } else {
        //            clearInterval(interval);
        //        }
        //    }, 2000)
        //}

        getData();
        checkingCookieUser();
    }, []);

    // Adding user object to the context api store and his credentials in the cookies.
    const addUser = (user) => {
        const token = getCookie("token");
        const email = getCookie("email");
        const expiration = getCookie("expiration");

        // Alot of nesting.
        const userNest = {
            user: user,
            token: token,
            email: email,
            expiration: expiration,
        }

        let userToAdd = {
            user: userNest
        }

        dispatch({
            type: CHECK_USER,
            user: userToAdd,
        })
    }

    
    const dataListener = async (apiController) => {
        const result = await FetchData(apiController, null, "GET");
        return result;
    }


    return <div className="App">
        <header className="App-header">
            <Layout>
                <Router>

                    {/* Navigation bar */}
                    <Navbars />

                    <Switch>

                        <Route exact path="/authO/register">
                            <Register />
                        </Route>
                        <Route exact path="/authO/login/:payment?">
                            <Login />
                        </Route>
                        <Route exact path="/authO/logout">
                            <Logout />
                        </Route>
                        <Route exact path="/checkout">
                            <Checkout />
                        </Route>
                        <Route exact path="/payment">
                            <Payment />
                        </Route>
                        <Route exact path="/adminpage">
                            <AdminPage />
                        </Route>

                        {/*<Route path="/categories/:id">
                            <Categories />
                        </Route>*/}

                        <Route path="/categories/:name?/:id?">
                            <Categories />
                        </Route>

                        <Route exact path="/">
                            <Home />
                        </Route>

                        <Route path="*">
                            <NotFound />
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