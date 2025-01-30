import axios from 'axios';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';


import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Bounce, toast } from 'react-toastify';

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const[serverError,setserverError]=useState("");
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const registerUser = async (value) => {
    setIsLoading(true);
    try {
      const response = await axios.post(`https://ecommerce-node4.onrender.com/auth/signin`, value);

   
      console.log(response);
      console.log(response.data);

      
    } catch (error) {
      if(error.response.status==409)
      {
      setserverError("email aready use");
      }
      else{
        setserverError("servor error");

      }
    } finally {

      setIsLoading(false);
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit(registerUser)}>
        <div className='text-danger'>{serverError}</div>
  
        <FloatingLabel controlId="floatingInput2" label="Email Address" className="mb-3">
          <Form.Control type="email" {...register("email", { required: "Email is required" })} />
          {errors.email && <div className="text-danger">{errors.email.message}</div>}
        </FloatingLabel>

        <FloatingLabel controlId="floatingInput3" label="Password" className="mb-3">
          <Form.Control type="password" {...register("password", { required: "Password is required" })} />
          {errors.password && <div className="text-danger">{errors.password.message}</div>}
        </FloatingLabel>

        <Button type="submit" variant="primary" disabled={isLoading}>
          {isLoading ? "Loading..." : "Login"}
        </Button>
      </Form>
    </>
  );
}

export default Login;
