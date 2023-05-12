"use client";
import React from 'react';
import { useForm } from 'react-hook-form';

function UpdateProfile() {
  const { register, handleSubmit, formState: { errors }, } = useForm();

  const handleUpdateProfile = (data) => {
    console.log(data);

  };
  return (
    <div class="min-h-screen p-2 md:p-6 bg-gray-100 flex items-center justify-center">
      <div class="container max-w-screen-lg mx-auto rounded bg-white shadow-lg  border border-gray-200 p-4">
        <form onSubmit={handleSubmit(handleUpdateProfile)}>
          <label
            class="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
            <span class="flex flex-col justify-center items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <p class="font-medium text-gray-600">
                Drop files to Attach, or
                <span class="text-blue-600 underline">browse</span>
              </p>
            </span>
            <input   {...register("file", {
              required: "file is required",
            })} type="file" name="file" class="hidden" />
          </label>
          {errors.file && (
            <p className="text-red-500">{errors.file.message}</p>
          )}

          <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div className='my-4'>
              <label className=' ' for="address">Full Name</label>
              <input
                {...register("name", {
                  required: "name is required",
                })}
                type="text" name="name" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="your full name" />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>
            <div className='my-4'>
              <label className=' ' for="address">Address</label>
              <input
                {...register("address", {
                  required: "address is required",
                })}
                type="text" name="address" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="your address" />
              {errors.address && (
                <p className="text-red-500">{errors.address.message}</p>
              )}
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div className='my-4'>
              <label className=' ' for="address">Phone Number</label>
              <input
                {...register("number", {
                  required: "number is required",
                })}
                type="text" name="number" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="your phone number" />
              {errors.number && (
                <p className="text-red-500">{errors.number.message}</p>
              )}
            </div>
            <div className='my-4'>
              <label className=' ' for="address">Email</label>
              <input
                {...register("email", {
                  required: "email is required",
                })}
                type="email" name="email" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="your email" />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>
          </div>
          <div class="text-right mt-3">
            <button type='submit' class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Update Profile</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateProfile;