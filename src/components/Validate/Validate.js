import React from 'react';

const Validate = (subject, content, name, email) => {
    let chek = false;
    let errorSubject = document.getElementById('subject');
    let errorContent = document.getElementById('content');
    let errorName = document.getElementById('name');
    let errorEmail = document.getElementById('email');
    errorSubject.innerHTML = null;
    errorContent.innerHTML = null;
    errorName.innerHTML = null;
    errorEmail.innerHTML = null;


    if (subject.length < 5) {
        errorSubject.innerHTML = "Length must at least 5 symbols";
        chek = true;
    }

    if (subject.length > 50) {
        errorSubject.innerHTML = "You have reached maximum of 50 symbols";
        chek = true;
    }

    if (content.length < 5) {
        errorContent.innerHTML = "Length must at least 5 symbols";
        chek = true;
    }

    if (content.length > 500) {
        errorContent.innerHTML = "You have reached maximum of 500 symbols";
        chek = true;
    }

    if (name.length < 5) {
        errorName.innerHTML = "Length must at least 5 symbols";
        chek = true;
    }

    if (name.length > 50) {
        errorName.innerHTML = "You have reached maximum of 50 symbols";
        chek = true;
    }

    if (email.length < 5 || !validateEmail(email) || email.length > 50) {
        if (email.length < 5) {
            errorEmail.innerHTML = "Length must at least 5 symbols";
        } else if (email.length > 50) {
            errorEmail.innerHTML = "You have reached maximum of 50 symbols";
        } else {
            errorEmail.innerHTML = "Invalid email";
        }
        chek = true;
    }

    if (!chek) {
        return false;
    }
    return true;
}

export const validateEmail = (email) => {
    var re = /\S{2}\S+@\S{2}\S+\.\S{3}\S+/;
    return re.test(email);
}

export default Validate