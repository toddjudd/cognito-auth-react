import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as z from 'zod';

const signinSchema = z.object({
  email: z.string().email().min(1),
  password: z.string().min(1),
  rememberMe: z.boolean(),
});

export const SigninPage = () => {
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(signinSchema),
  });

  const onSubmit = handleSubmit(
    (data) => {
      console.log('data: ', data);
    },
    (errors) => {
      console.log('error: ', errors);
    }
  );

  return (
    <div className='col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3'>
      <form onSubmit={onSubmit}>
        <h1 className='mb-3 fw-bold'>Welcome back!</h1>
        <p className='text-muted'>Sign in to manage your account.</p>
        <div className='form-floating mb-4'>
          <input
            {...register('email', { required: true })}
            className='form-control'
            placeholder='name@example.com'
          />
          <label htmlFor='email'>Email address</label>
        </div>
        <div className='form-floating mb-4'>
          <input
            {...register('password', { required: true })}
            className='form-control'
            type='password'
            placeholder='Password'
          />
          <label htmlFor='password'>Password</label>
        </div>
        <div className='checkbox mb-3 w-100'>
          <label className='w-100'>
            <input
              {...register('rememberMe', { required: true })}
              type='checkbox'
              defaultValue='remember-me'
            />{' '}
            Remember me{' '}
            <div className='float-sm-end'>
              <Link to='/forgot-password'>Forgot your password?</Link>
            </div>
          </label>
        </div>
        <button className='btn btn-lg btn-primary' type='submit'>
          Sign in
        </button>
        <p className='my-5 text-muted'>
          Don&apos;t have an account?{' '}
          <Link to='/register' className='text-muted'>
            Create Account
          </Link>
          .
        </p>
        <p className='text-muted'>
          All Rights Reserved © 2022 Military Connect
        </p>
      </form>
    </div>
  );
};
