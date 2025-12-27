'use client'

import { FcGoogle } from 'react-icons/fc';

export const SignIn = () => {
  const onSignIn = () => {
    alert('Sign In');
  };

  return (
    <form
      className="text-black bg-white rounded-md p-10 flex flex-col gap-4 justify-center items-start w-full max-w-3/10"
      action="sign-in"
    >
      <div>
        <h1 className="text-4xl uppercase">Sign In</h1>
        <p>Create an account</p>
      </div>

      <div className="flex flex-col gap-0.5 w-full">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="hello@gmail.com"
          className="border rounded-sm p-2 w-full"
        />
      </div>

      <div className="flex flex-col gap-0.5 w-full">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          className="border rounded-sm p-2 w-full"
        />
      </div>

      <button
        type="button"
        onClick={onSignIn}
        className="text-center rounded-sm bg-sky-400 font-semibold w-full p-2"
      >
        Sign In
      </button>
      <button
        type="button"
        className="text-center rounded-sm w-full font-semibold flex gap-1 p-2 items-center justify-center border-gray-400 border"
      >
        Sign in with <FcGoogle />
      </button>
    </form>
  );
};
