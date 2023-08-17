import { useForm } from 'react-hook-form';
import { useAuth } from '../context/auth.context';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/register.css';


function RegisterPage() {

  const { register, handleSubmit, formState: {errors} } = useForm();
  const { signup, isAuthenticathed, errors: RegisterErrors } = useAuth()
  const navigate = useNavigate();

  useEffect(() => {
    if(isAuthenticathed) navigate('/tasks');
  }, [isAuthenticathed, navigate])

  const onSubmited = handleSubmit(async (values) => {
    signup(values);
  })
  return (
    <div>
      <div className="caja">  
        <div className="centrar">
          {
            RegisterErrors.map((error, i) => (
              <div className='bg-red-500 text-white p-2' key={i}>
                {error}
              </div>
            ))
          }
          <form onSubmit={onSubmited}>
            <div className="mb-6">
              <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your user</label>
              <input type="text" {...register("username", {require: true})} id="username" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="username" required/>

              {
                errors.username && <p className='text-red-500'>username is required</p>
              }

            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
              <input type="email" {...register("email", {require: true})} id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="email" required/>

              {
                errors.email && <p className='text-red-500'>email is required</p>
              }

            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
              <input type="password" {...register("password", {require: true})} id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required/>

              {
                errors.password && <p className='text-red-500'>password is required</p>
              }

            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage