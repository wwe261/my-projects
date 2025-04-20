import {useState, useEffect} from 'react'

export function validateInput(){
    const [formData, setFormData]=useState({})
    const [errors, setErrors]=useState({})
    

    

    function handleChange(name,value){
        setFormData((prev)=>({...prev, [name]:value}))
        
    }

    const validateForm=()=>{
        const validationErrors={}
        //VALIDATE TITLE
        if(!formData.title || !formData.title.trim()){
            validationErrors.title="book Title cannot be empty"
        }else{
            formData.title=formData.title.trim()
        }

        if(!formData.isbn ||!formData.title.trim() ){
            validationErrors.isbn="isbn must not be empty"
        }else if(!/^\d{3}-\d{4}-\d{4}$/.test(formData.isbn)){
            validationErrors.isbn="isbn should be in the format 123-4567-1111"
        }else{
            formData.isbn=formData.isbn.trim()
        }

        if(!formData.authors || !formData.authors.trim()){
            validationErrors.authors="authors filed cannot be empty"
        }else if(!/^[A-Za-z]+$ /.test(formData.authors)){
            validationErrors.authors="must contain string only"
        }else{
            formData.authors=formData.authors.trim()
        }
        
        if(!formData.category || !formData.category.trim()){
            validationErrors.category="Field cannot be empty"

        }else if(!/^[A-Za-z]+$ /.test(formData.category)){
            validationErrors.category="cannot contain special characters"
        }else{
            formData.category=formData.category.trim()
        }

        if(!formData.price || !formData.authors.trim()){
            validationErrors.price="field cannot be empty"
        }else if(/^[0-9.,]+$/.test(formData.price)){
            validationErrors.price="cannot contain special characters"
        }else{
            formData.price=formData.price.trim()
        }



    }


    return {validateForm, handleChange, formData}
}