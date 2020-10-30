import React, { useEffect } from 'react';
import { useState } from 'react';
import { useStateValue } from '../ContextApi/StateProvider';
import setCookie from '../Cookies/SetCookie';
import getCookie from '../Cookies/GetCookie';
import { REMOVE_USER, REMOVE_ITEM_FROM_BASKET } from '../ContextApi/Types';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import './header__options.css';

const HeaderOptions = () => {

    const [state, setState] = useState({});
    const [state1, setState1] = useState({});
    const [store, dispatch] = useStateValue();
    let user = store.user;


    const removefromBasket = () => {
        console.log("removing");
        dispatch({
            type: REMOVE_ITEM_FROM_BASKET,
            removefromBasket: {
                id: 1
            },
        });
    }

    const logOutHandle = () => {
        setCookie('email', null, -1);
        setCookie("user", null, -1);
        setCookie("token", null, -1);
        setCookie("user_name", null, -1);
        setCookie("cheked", null, -1);
        dispatch({
            type: REMOVE_USER,
            user: {
                user: []
            },
        });
    }

    const retriveData = () => {

        const user = getCookie('user');

        if (user?.length > 1) {
            setTimeout(() => {
                setState({
                    user: {
                        user: user
                    }
                });
            }, 250)
        } else {

        }

    }

    useEffect(() => {
        setTimeout(() => {
            setState({
                user: user[0] != undefined ? user[0].user : null
            });
        }, 200);

        retriveData();

    }, [user])

    const prevDef = () => {
        console.log(store);
        console.log(state?.user?.user);
        console.log(state?.user?.user);
    }

    return <div className="d-flex header__options">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.1.0/css/font-awesome.min.css" />
        {/*<Link
            to={state?.user ? "/" : "/AuthO/Register"} className="text-infos mr-3"
            onClick={() => prevDef}>
            {state.user?.user ? state.user.user + "'s management" : "Register"}
        </Link>*/}

        <Link
            to={state?.user ? "/AuthO/Logout" : "/AuthO/Login"}
            className="mr-3 text-infos"
            onClick={logOutHandle}>
            {state.user ?
                <div className="">
                    <span
                        className="header__optionsLineOne">
                        Hello {state.user.user}
                    </span>
                    < br />
                    <span
                        className="header__optionsLineTwo">
                        Sing out
                        </span>
                </div>
                : 
                <div className="">
                    <span
                        className="header__optionsLineOne">
                        Hello Guest
                    </span>
                    < br />
                    <span
                        className="header__optionsLineTwo">
                        Sing in
                        </span>
                </div>
                }
        </Link>

        <Link
            to="/"
            className="mr-3 text-infos"
        >
            <div className="">
                <span className="header__optionsLineOne">Returns</span>< br />
                <span className="header__optionsLineTwo">& Orders</span>
            </div>
        </Link>

        <Link
            to="/"
            className="mr-3 text-infos2"
        >
            <div className="">
                <span className="header__optionsLineOne">Your</span>< br />
                <span className="header__optionsLineTwo">Prime</span>
            </div>
        </Link>

        <Link
            to="/"
            className="mr-3 text-infos3"
            onClick={prevDef}>
            <i className="fa fa-shopping-basket basket-icon"></i>

            <svg width="3em" height="3em" viewBox="0 0 16 16" className="bi bi-basket" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z" />
            </svg>

            <span className="header__optionsLineTwo">{store?.basket?.length}</span>
        </Link>

        {/*<Link
            to="/"
            className="mr-3 text-infos"
            onClick={removefromBasket}>
            removefromBasket
        </Link>*/}

        {/*<div
            className="mr-3 text-infos"
            onClick={prevDef}>
            users in store {user?.length}
        </div>*/}

    </div>
}

export default HeaderOptions;