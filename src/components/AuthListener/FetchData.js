import react, { useEffect } from 'react';
import { useState } from 'react';
import getCookie from '../Cookies/GetCookie';
import url from '../BaseUrl/BaseUrl';

const FetchData = async (apiController) => {

    const [state, setState] = useState({});

    const user = getCookie('user');
    if (user) {
        setState({
            user: user
        });
    } else {
        setState({
            user: null
        });
    }
    useEffect(() => {

        const result = await fetch(url(apiController))
            .then(data => data.json())
            .catch(err => console.log(err));
        if (result.error || result.errors) {
            alert(result.error + "  " + result.errors);
        } else {
            setState({
                data: await result
            });
            setTimeout(() => {
                return state;
            }, 200);
        }
    }, []);
}

export default FetchData;