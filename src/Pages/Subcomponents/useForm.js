import  {useState} from "react";
import {omit } from "lodash"


const useForm = () => {
    
    //Form values
    const [values,setValues] = useState({});

    //Form Errors
    const [errors, setErrors] = useState({});

    //validate inputs
    const validate = (event, name, value) => {
        
        switch (name) {
            case 'firstname':
                if(value.length < 1){
                    setErrors ({
                        ...errors,
                        firstname: 'Enter a First name'
                    })
                }else{
                    let newObj = omit(errors, "firstname");
                    setErrors(newObj)

                }


                break;

            case 'lastname':
                if(value.length <1 ){
                    setErrors ({
                        ...errors,
                        lastname: 'Enter a Last name'
                    })
                    }else{
                        let newObj = omit(errors, "lastname");
                        setErrors(newObj)
                    }
                break;
            
            case 'message':
                if(value.length < 1){
                    setErrors ({
                        ...errors,
                        message: 'Please enter a message'
                    })
                    }else{
                        let newObj = omit(errors, "message");
                        setErrors(newObj)
    
                    }
                break;

            case 'email':
                if(
                    !new RegExp( /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/).test(value)
                ){
                    setErrors ({
                        ...errors,
                        email: 'Please enter a valid email address'
                    })
                }else {
                    let newObj = omit(errors, "email");
                        setErrors(newObj)
                }
                break;

            default:
                break;


        }
    }

    //Handle form inputs
    const handleChange = (event) =>{
        event.persist();

        let name = event.target.name;
        let val = event.target.value;

        validate(event,name,val)

        setValues({
            ...values,
            [name]:val,
        })

    }


    return{values, errors, handleChange}
}

export default useForm;