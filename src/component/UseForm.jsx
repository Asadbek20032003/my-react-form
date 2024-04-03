import React, {useState, useEffect} from 'react'
 

const UseForm = (Callback, ValidateInfo) => {
  
    const [values, setValues] = useState({
        username:"",
        email:"",
        password:"",
        password2:""
    })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)


  const handleChange = e => {
    const {name , value} = e.target
    
    setValues({
        ...values,
        [name]: value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();


    setErrors(ValidateInfo(values))
    setIsSubmitting(true)
  }

  useEffect(()=>{
    if(Object.keys(errors).lenght === 0 && isSubmitting) {
      Callback();
    }
  }, [errors]);

    return {handleChange, values , handleSubmit, errors};
}

export default UseForm
