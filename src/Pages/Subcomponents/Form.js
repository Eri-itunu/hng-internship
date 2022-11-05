
import useForm from "./useForm"

export default function Form(){   


    const formLogin = () =>{

        console.log("Form values" , values )
    }

    const {handleChange,values, errors, handleSubmit} = useForm(formLogin);

    

    return(
            <div className="contact">

                <div className="contact-form">

                        <h1>Contact Me</h1>
                        <p>Hi there, contact me to ask me about anything you have in mind.</p>

                        <div >
                            <form  onSubmit={handleSubmit}>

                                <div class="row pt-2 pb-4">
                                    <div class="col">
                                        <label for="exampleFormControlInput1">First name </label>
                                        <input id="first_name" type="text" className="form-control" name="firstname" placeholder="Enter your first name"  onChange={handleChange}  />
                                        {errors.firstname && <p className="errors">{errors.firstname}</p>}
                                    </div>
                                    <div class="col">
                                        <label for="exampleFormControlInput1">Last name </label>
                                        <input id="last_name" type="text" class="form-control"
                                        placeholder="Enter your last name" name="lastname"   onChange={handleChange} />
                                        {errors.lastname && <p className="errors">{errors.lastname}</p>}
                                    </div>
                                </div>

                                <div class="form-group pb-4">
                                    <label for="exampleFormControlInput1">Email </label>
                                    <input  type="email" class="form-control" id="email" name="email" placeholder="yourname@email.com"   onChange={handleChange} />
                                    {errors.email && <p className="errors">{errors.email}</p>}
                                </div>
                    
                                <div class="form-group pb-4">
                                    <label for="exampleFormControlTextarea1">Message</label>
                                    <textarea class="form-control" id="message" name="message"   placeholder="Send me a message and I'll reply you as soon as possible..." rows="3"  onChange={handleChange} ></textarea>
                                    
                                </div>
                                <div className="message-error">
                                    {errors.message && <p className="errors">{errors.message}</p>}
                                </div>

                                <div class=" pb-2 custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="customCheck1"/>
                                    <label class="custom-control-label" for="customCheck1">You agree to providing your data to name who may contact you.</label>
                                </div>

                                <button  id="btn__submit" type="submit" class=" btn btn-primary btn-lg col-12">Send Message</button>
                            </form>
                        </div>

                        
                </div>
            </div>
    )
}