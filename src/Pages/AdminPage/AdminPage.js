import React from 'react';
import { useState } from 'react';
import Validate, { validateEmail } from '../../components/Validate/Validate';
import './AdminPage.css';
import FetchData from '../../components/AuthListener/FetchData';
import { useLocation } from 'react-router';

const AdminPage = () => {
    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }
    let query = useQuery();
    let id = query.get("id");
    let titleCategory = query.get("titleCategory");

    const [state, setState] = useState({
        success: false,
        procesing: false,
        letters: 0,
        lettersName: 0,
        lettersSubject: 0,
        lettersEmail: 0
    });

    const submitHandler = async (e) => {
        setState({
            procesing: true
        });
        let error = document.getElementById('errors');
        e.preventDefault();
        let errorNotSendEmail = document.getElementById('notSendEmailError');

        const payload = {
            title: e.target.title.value,
            categoryid: Number(id),
            rating: Number(e.target.rating.value),
            quantity: Number(e.target.quantity.value),
            imageurl: e.target.imageurl.value,
            price: Number(e.target.price.value),
            content: e.target.content.value,
            description: e.target.description.value,
            id: 0,
        }

        //validations for the inputs
        //const valid = Validate(subject, content, name, email);

        try {
            if (true) {
                const result = "email send";
                //await SendEmail(email, subject, name, content);

                if (await result === "email send") {

                    const isCreated = await FetchData("api/product", payload, "POST");
                    console.log(isCreated);
                    if (isCreated === "success") {
                        setState({
                            success: true
                        });
                        errorNotSendEmail.innerHTML = null;
                    } else if (result.errors) {
                        setState({
                            buttonPushed: false
                        });
                        error.innerHTML = "";

                        let arrayOfErrors = Object.values(result.errors);

                        arrayOfErrors.forEach((item, index) => {
                            error.innerHTML += item + "<br />";
                        });

                    } else {
                        //alert(isCreated);
                        setState({
                            procesing: false
                        });
                    }
                } else if (await result.errors.Name == "Invalid symbols") {
                    let errorName = document.getElementById('name');
                    errorName.innerHTML = result.errors.Name;

                    setState({
                        procesing: false
                    });
                } else {

                    errorNotSendEmail.innerHTML = 'Sorry there is a problem with mail service';

                    setState({
                        procesing: false
                    });
                }
            } else {
                errorNotSendEmail.innerHTML = null;
                setState({
                    procesing: false
                });
            }
        } catch (e) {
            setState({
                procesing: false
            });
            errorNotSendEmail.innerHTML = 'There was an error communicating with the server';
            console.log(e);
        }
    }

    const nameHandler = (e) => {
        let errorName = document.getElementById('name');
        const name = e.target.value;
        errorName.innerHTML = null;
        setState({
            lettersName: name.length
        });
        if (name.length < 5) {
            errorName.innerHTML = "Length must at least 5 symbols";
        }
        if (name.length >= 50) {
            errorName.innerHTML = "You have reached maximum of 50 symbols";
        }
    }

    const subjectHandler = (e) => {
        let errorSubject = document.getElementById('subject');
        const subject = e.target.value;
        errorSubject.innerHTML = null;
        setState({
            lettersSubject: subject.length
        });
        if (subject.length < 5) {
            errorSubject.innerHTML = "Length must at least 5 symbols";
        }
        if (subject.length >= 50) {
            errorSubject.innerHTML = "You have reached maximum of 50 symbols";
        }
    }

    const emailHandler = (e) => {
        let errorEmail = document.getElementById('email');
        const email = e.target.value;
        errorEmail.innerHTML = null;
        setState({
            lettersEmail: email.length
        });
        if (email.length < 5 || !validateEmail(email) || email.length > 50) {
            if (email.length < 5) {
                errorEmail.innerHTML = "Length must at least 5 symbols";
            } else if (email.length >= 50) {
                errorEmail.innerHTML = "You have reached maximum of 50 symbols";
            } else {
                errorEmail.innerHTML = "Invalid email";
            }
        }
    }

    const messageHandler = (e) => {
        let errorMessage = document.getElementById('content');
        const message = e.target.value;
        errorMessage.innerHTML = null;
        setState({
            letters: message.length
        })
        if (message.length < 5) {
            errorMessage.innerHTML = "Length must at least 5 symbols and max 500";
        } else if (message.length === 500) {
            errorMessage.innerHTML = "You have reached the maximum of 500 symbols";
        }
    }

    return <div className="create-backs">

        {/* <Successully uid={this.state.uid} /> */}
        {/*{this.state.procesing ? <span id="message" className="procesing">Procesing...</span> :*/}

        <div className="contact-left-letters text-center">
            <div className="contact-info-holder">
                <img src="https://image.ibb.co/kUASdV/contact-image.png" alt="image" />
                <h2>Admin page</h2>
            </div>
        </div>


        <div className="row">
            <div className="col-lg-4"></div>
            <div className="col-lg-4"></div>
            <div className="col-lg-4"></div>
        </div>

        <form className="create-post" onSubmit={submitHandler}>

            <div className="form-group">
                <label >Title * {state.lettersName}</label>
                <input onChange={nameHandler} type="text" maxLength="50" minLength="1" className="form-control" name="title" />
                <span id="name" ></span>
            </div>

            <div className="form-group">
                <label >CategoryId * {state.lettersName}</label>
                <input onChange={nameHandler} type="text" maxLength="50" minLength="1" className="form-control" value={id + " " + titleCategory} disabled  name="categoryid" />
                <span id="name" ></span>
            </div>



            <div className="form-group">
                <label >ImageUrl * {state.lettersName}</label>
                <input onChange={nameHandler} type="text" maxLength="200" minLength="1" className="form-control" name="imageurl" />
                <span id="name" ></span>
            </div>

            <div className="form-group">
                <label >Quantity * {state.lettersName}</label>
                <input onChange={nameHandler} type="text" maxLength="50" minLength="1" className="form-control" name="quantity" />
                <span id="name" ></span>
            </div>

            <div className="form-group">
                <label >Rating * {state.lettersSubject}</label>
                <input onChange={subjectHandler} type="text" maxLength="50" minLength="1" className="form-control" name="rating" />
                <span id="subject" ></span>
            </div>

            <div className="form-group">
                <label >Description * {state.lettersEmail}</label>
                <input onChange={emailHandler} type="text" maxLength="50" minLength="1" className="form-control" name="description" />
                <span id="email" ></span>
            </div>

            <div className="form-group">
                <label >Price * {state.lettersEmail}</label>
                <input onChange={emailHandler} type="text" maxLength="50" minLength="1" className="form-control" name="price" />
                <span id="email" ></span>
            </div>

            <div className="form-group">
                <label >Content * {state.letters}</label>
                <textarea type="text" onChange={messageHandler} className="form-control content-holder"  name="content" maxLength="1500" />
                <span id="content" ></span>
            </div>


            {state.procesing ? <div className="proces"><em>Procesing...</em></div> : <button type="submit" className="btn btn-primary">Create Product</button>}
            <span id="notSendEmailError" className="ml-3"></span>
        </form>

    </div>


}

export default AdminPage;