import React from 'react';
import url from '../BaseUrl/BaseUrl';

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

const CrossScript = () => {

    var csrfToken = getCookie("CSRF-TOKEN");

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == XMLHttpRequest.DONE) {
            if (xhttp.status == 200) {
                alert(xhttp.responseText);
            } else {
                alert('There was an error processing the AJAX request.');
            }
        }
    };
    xhttp.open('POST', `${url("api/testApi")}`, false);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.setRequestHeader("X-CSRF-TOKEN", csrfToken);
    xhttp.send(JSON.stringify({ "newPassword": "ReallySecurePassword999$$$" }));
}
export default CrossScript;