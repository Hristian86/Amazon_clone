import React from 'react';
import Cards from '../../components/Cards/Cards';
import getCookie from '../../components/Cookies/GetCookie';
import { useState } from 'react';
import { useEffect } from 'react';
import { REMOVE_ITEM_FROM_BASKET } from '../../components/ContextApi/Types';
import { useStateValue } from '../../components/ContextApi/StateProvider';

const Home = () => {
    
    const [state, setState] = useState({});
    const [{ basket }, dispatch] = useStateValue();

    const checkingCookieUser = () => {
        try {
            const user = getCookie('user');
            if (user) {
                setState({
                    user: user
                });
            } else {
                setState({
                    user: null
                })
            }
        } catch (e) {
            console.log(e);
        }
    }

    
    const removefromBasket = () => {
        console.log("removing");
        dispatch({
            type: REMOVE_ITEM_FROM_BASKET,
            removefromBasket: {
                id: 1
            },
        });
    }

    useEffect(() => {
        checkingCookieUser();
    }, [])

    let array = [{
        id: 1,
        userName: "Prncho"
    }, {
        id: 2,
        userName: "Go6o"
    }]

    return <div className="d-flex">

        {state?.user ?
            <div className="row">
                {array.map((data, index) =>
                    (<Cards 
                        key={data.id}
                        userName={data.userName}
                        id={data.id}
                    />)
                )}
                </div>
            : <div
                className="text-center load">
                Not logged
                </div>}

        <button onClick={removefromBasket}>Remove item</button>

        <div className="spacer"></div>
    </div>
}

export default Home;