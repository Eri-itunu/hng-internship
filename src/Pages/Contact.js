import "../App.css"

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css';

import Footer from "./Subcomponents/Footer"

export default function Contact() {
    return(
            <>
                <div className="contact">

                    <div className="contact-form">

                        <h1>Contact Me</h1>
                        <p>Hi there, contact me to ask me about anything you have in mind.</p>

                        <div >

                            <form >

                                <div class="row pt-2 pb-4">
                                    <div class="col">
                                        <label for="exampleFormControlInput1">First name </label>
                                        <input id="first_name" type="text" class="form-control" placeholder="Enter your first name" aria-label="First name"/>
                                    </div>
                                    <div class="col">
                                        <label for="exampleFormControlInput1">Last name </label>
                                        <input id="last_name" type="text" class="form-control" placeholder="Enter your last name" aria-label="Last name"/>
                                    </div>
                                </div>

                                <div class="form-group pb-4">
                                    <label for="exampleFormControlInput1">Email </label>
                                    <input  type="email" class="form-control" id="email" placeholder="yourname@email.com"/>
                                </div>
                    
                                <div class="form-group pb-4">
                                    <label for="exampleFormControlTextarea1">Message</label>
                                    <textarea class="form-control" id="message" placeholder="Send me a message and I'll reply you as soon as possible..." rows="3"></textarea>
                                </div>

                                <div class=" pb-2 custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="customCheck1"/>
                                    <label class="custom-control-label" for="customCheck1">You agree to providing your data to name who may contact you.</label>
                                </div>

                                <button id="btn__submit" type="button" class=" btn btn-primary btn-lg col-12">Send Message</button>
                            </form>
                        </div>

                        
                    </div>
                </div>
                <div className="contact-footer">
                    <Footer/>
                </div>
                
            </>
    )
}