import react from 'react';
import getCookie from '../Cookies/GetCookie';
import url from '../BaseUrl/BaseUrl';

// fetch data from back with all crud operations
const FetchData = async (apiController, payload, method) => {
    try {
        const XSRFToken = getCookie('XSRF-TOKEN');
        const token = getCookie('token');

        let second_parametar = {};

        const first__parametar = url(apiController).toString();;
        if (method === "POST") {
            second_parametar = {
                "method": `${method}`,
                "headers": {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'X-XSRF-TOKEN': XSRFToken,
                }, body: JSON.stringify(payload)
            };
        } else {
            second_parametar = {
                "method": `${method}`,
                "headers": {
                    'Authorization': `Bearer ${token}`,
                    'X-XSRF-TOKEN': XSRFToken,
                }
            };
        }

        const result = await fetch(first__parametar, second_parametar)
            .then(res => res.json())
            .catch(err => console.log(err));

        if (await result) {
            //console.log(result);
            return result;
        }

    } catch (e) {
        return e;
    }
}

export default FetchData;