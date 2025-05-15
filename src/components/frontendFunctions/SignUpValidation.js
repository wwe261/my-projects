import { useState } from "react"
import {parsePhoneNumberFromString, isValidPhoneNumber} from 'libphonenumber-js'
/*
export const signUpValidation=()=>{
    const [signUpData, setSignUpData]=useState({})
    const [signUpErrors, setSignUpErrors]=useState({})

    const handleChange=(name, value)=>{
        setSignUpData((prev )=> ({...prev, [name]:value}))
    }
    

    const validateForm=()=>{
        const validationErrors={}
        const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!signUpData.username || !signUpData.username.trim()  ){

            validationErrors.username="Username required"

        }else{
            signUpData.username=signUpData.username.trim()
        }

        if(!signUpData.email || !signUpData.email.trim()){
            validationErrors.email="Email Required"
        }else if(!emailValidation.test(signUpData.email)){
            validationErrors.email="Ivalid email address"
        }else{
            signUpData.email=signUpData.email.trim()
        }
        
        if(!signUpData.phoneNumber ||  !signUpData.phoneNumber.trim() ){

            validationErrors.phoneNumber="Phone number required"

        }else if(!isValidPhoneNumber(signUpData.PhoneNumber)){
             validationErrors.phoneNumber="Invalid Phone number"
        }   else{

            try{
            function toE164(localNumber, defaultCountry = 'ZA') {
               
                 let phone;

                   if(typeof signUpData.phoneNumber === 'string'){
                    phone = parsePhoneNumberFromString(localNumber, defaultCountry);
                   }

                return phone && phone.isValid()?
                        {
                            e164: phone.format('E.164'),
                            international: phone.formatInternational(),
                            national: phone.formatNational(),
                            country:phone.country
                        }
                       : null;


                       
            } }catch(error){
                            console.log(error)
                            return null;
                }
                let parsedPhone= toE164(signUpData.phoneNumber.toString() ?? '')

                    if (parsedPhone) {
                    signUpData.phoneNumber = parsedPhone.international;
                    signUpData.country = parsedPhone.country;
                  } 
            
        }

        

        if(!signUpData.password || !signUpData.password.trim()){

            validationErrors.password="Password equired"

        }else if(!/^(?=.*[A-Z]).*$/.test(signUpData.password)){

            validationErrors.password='Password must have atleast 1 uppercase letter'

        }else if(!/^(?=.*[a-z]).*$/.test(signUpData.password)){

            validationErrors.password1='Password must have atleast 1 lowercase letter'

        }else if(!/^(?=(.*\d.*\d)).*$/.test(signUpData.password)){

            validationErrors.password2='Password must have atleast 2 digits'

        }else if(!/^(?=(?:.*[\W_]){3,}).*$/.test(signUpData.password)){

            validationErrors.password3='Password must have atleast 3 special characters'

        }else if(/^.{9,}$ /.test(signUpData.password)){
            validationErrors.password4="Password must be atleast 9 characters long"
        }else{
            signUpData.password=signUpData.password.trim()
        }


        if(!signUpData.confirmPassword || !signUpData.confirmPassword.trim()){

            validationErrors.confirmPassword='Does not match the password'

        }else if(signUpData.confirmPassword !== signUpData.password){

            validationErrors.confirmPassword='Does not match the password'

        }else{
            signUpData.confirmPassword=signUpData.confirmPassword.trim()
        }

        setSignUpErrors(validationErrors)
        return Object.keys(validationErrors).length === 0
    }

    return {validateForm, signUpErrors, signUpData, handleChange}

} */


export const signUpValidation = () => {
  const [signUpData, setSignUpData] = useState({});
  const [signUpErrors, setSignUpErrors] = useState({});

  const handleChange = (name, value) => {
    setSignUpData((prev) => ({ ...prev, [name]: value }));
  };

  const toE164 = (localNumber, defaultCountry = 'ZA') => {
    if (typeof localNumber !== 'string' || !localNumber.trim()) return null;

    try {
      const phone = parsePhoneNumberFromString(localNumber, defaultCountry);
      return phone && phone.isValid()
        ? {
            e164: phone.format('E.164'),
            international: phone.formatInternational(),
            national: phone.formatNational(),
            country: phone.country,
          }
        : null;
    } catch (err) {
      console.log('Phone parse error:', err.message);
      return null;
    }
  };

  const validateForm = () => {
    const validationErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const updatedData = { ...signUpData };

    // Username
    if (!updatedData.username || !updatedData.username.trim()) {
      validationErrors.username = 'Username required';
    } else {
      updatedData.username = updatedData.username.trim();
    }

    // Email
    if (!updatedData.email || !updatedData.email.trim()) {
      validationErrors.email = 'Email required';
    } else if (!emailRegex.test(updatedData.email)) {
      validationErrors.email = 'Invalid email address';
    } else {
      updatedData.email = updatedData.email.trim();
    }

    // Phone Number
    if (!updatedData.phoneNumber || !updatedData.phoneNumber.trim()) {
      validationErrors.phoneNumber = 'Phone number required';
    } else if (!isValidPhoneNumber(updatedData.phoneNumber)) {
      validationErrors.phoneNumber = 'Invalid phone number';
    } else {
      const parsed = toE164(updatedData.phoneNumber);
      if (parsed) {
        updatedData.phoneNumber = parsed.international;
        updatedData.country = parsed.country;
      } else {
        validationErrors.phoneNumber = 'Invalid phone format';
      }
    }

    // Password
    if (!updatedData.password || !updatedData.password.trim()) {
      validationErrors.password = 'Password required';
    } else if (!/^(?=.*[A-Z])/.test(updatedData.password)) {
      validationErrors.password = 'Must have at least 1 uppercase letter';
    } else if (!/^(?=.*[a-z])/.test(updatedData.password)) {
      validationErrors.password = 'Must have at least 1 lowercase letter';
    } else if (!/(?=(.*\d.*\d))/.test(updatedData.password)) {
      validationErrors.password = 'Must have at least 2 digits';
    } else if (!/(?=(?:.*[\W_]){3,})/.test(updatedData.password)) {
      validationErrors.password = 'Must have at least 3 special characters';
    } else if (!/^.{9,}$/.test(updatedData.password)) {
      validationErrors.password = 'Must be at least 9 characters long';
    } else {
      updatedData.password = updatedData.password.trim();
    }

    // Confirm Password
    if (!updatedData.confirmPassword || updatedData.confirmPassword.trim() !== updatedData.password) {
      validationErrors.confirmPassword = 'Does not match the password';
    }

    setSignUpErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSignUpData(updatedData); 
      return true;
    }
    return false;
  };

  return { validateForm, signUpErrors, signUpData, handleChange };
};
