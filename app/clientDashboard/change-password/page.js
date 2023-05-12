"use client";
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function ChangePassword() {

  const { register, handleSubmit, formState: { errors }, } = useForm();
  const [error, setError] = useState('');

  const handleChangePassword = (data) => {
    const { email, currentPassword, newPassword } = data;
    setError('');
    if (currentPassword !== newPassword) {
      setError('current password and new passwod should be matched');
    }
  };
  return (
    <div class="min-h-screen p-2 md:p-6 bg-gray-100 flex items-center justify-center">
      <div class="container max-w-screen-lg mx-auto">

        <form onSubmit={handleSubmit(handleChangePassword)}>

          <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <p className='mb-5 font-bold text-xl'>Change Password</p>
            <label className=' text-gray-400' for="address">Email</label>
            <input
              {...register("email", {
                required: "email is required",
              })}
              type="email" name="email" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="example@gmail.com" />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
            <div className='my-4'>
              <label className=' text-gray-400' for="address">Current Password</label>
              <input
                {...register("currentPassword", {
                  required: "current password is required",
                })}
                type="password" name="currentPassword" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="your current password" />
              {errors.currentPassword && (
                <p className="text-red-500">{errors.currentPassword.message}</p>
              )}
            </div>


            <label className=' text-gray-400' for="address">New Password</label>
            <input
              {...register("newPassword", {
                required: "new password is required",
              })}
              type="password" name='newPassword' class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="your new password" />
            {errors.newPassword && (
              <p className="text-red-500">{errors.newPassword.message}</p>

            )}
            <p className="text-red-500">{error}</p>

            <div class="text-right mt-3">
              <button type='submit' class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Change Password</button>
            </div>
          </div>
        </form>
      </div>
    </div>

  );
}

export default ChangePassword;