import {useState, useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { updateFields } from '@/src/redux/AddBookInputValue'


export function validateInput(){
    //const [formData, setFormData]=useState({})
    const [errors, setErrors]=useState({})
    
    const dispatch=useDispatch()
    function handleChange(name,value){
        dispatch(updateFields({name,value}))
      
    }
    

    const formData=useSelector((state)=> state.addBookInputValues.bookFormData)
    
    const validateForm=()=>{
        const validationErrors={}
        //VALIDATE TITLE
        if(!formData.title || !formData.title.trim()){
            validationErrors.title="book Title cannot be empty"
        }

        if(!formData.isbn ||!formData.title.trim() ){
            validationErrors.isbn="isbn must not be empty"
        }else if(!/^\d{3}-\d{4}-\d{4}$/.test(formData.isbn)){
            validationErrors.isbn="isbn should be in the format 123-4567-1111"
        }

        if(!formData.authors || !formData.authors.trim()){
            validationErrors.authors="authors filed cannot be empty"
        }else if(!/^[A-Za-z]+$/.test(formData.authors)){
            validationErrors.authors="must contain string only"
        }
        
        if(!formData.category || !formData.category.trim()){
            validationErrors.category="Field cannot be empty"

        }else if(!/^[A-Za-z]+$/.test(formData.category)){
            validationErrors.category="cannot contain special characters"
        }

        if(!formData.price || !formData.price.trim()){
            validationErrors.price="field cannot be empty"
        }else if(!/^[0-9.,]+$/.test(formData.price)){
            validationErrors.price="cannot contain special characters"
        }
        
        if(!formData.image || /*!formData.authors.trim()*/ formData.image === undefined){
            validationErrors.image="Image is required"
        }
       
        setErrors(validationErrors)

        return Object.keys(validationErrors).length ===0

    }


    return {validateForm, handleChange, formData, errors}
}