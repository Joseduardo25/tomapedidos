import React from 'react';
import { useForm } from 'react-hook-form';

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
   
    <form onSubmit={handleSubmit(onSubmit)}>
      
      <input
        name='email'
        type='email'
        placeholder='Ingresa tu Email'
        {...register('email', { required: true })}
      />
      {errors.email && <span>Password es requerido</span>}
      <input
        name='password'
        type='password' 
        {...register('password', { required: true })} 
      />
      {errors.password && <span>Password es requerido</span>}
      <input type="submit" />
    </form>
  )
}

export default Login