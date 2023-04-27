"use client"
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { RiImageAddFill } from "react-icons/ri";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

    const handleAddProduct = (data) => {
  const name = data.username;
  const email = data.email;
  const password = data.password;
  const type = data.type;
  const datas ={name, email ,password, type}

    };


  const googleHandel = () => {};

  return (
    <div>
      <div className="w-full mx-auto my-6 max-w-md p-8 space-y-3 rounded-xl bg-bg_Primary text-gray-100">
        <h1 className="text-2xl text-text_Secondry  font-bold text-center">
          signUp
        </h1>
        <form
        onSubmit={handleSubmit(handleAddProduct)}
         className="space-y-6 ng-untouched ng-pristine ng-valid">
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block text-gray-100">
              User name *
            </label>
            <input
              type="text"
              id="username"
              name="name"
              placeholder="Username"
              className="w-full px-4 py-3 rounded-md border-gray-00 bg-gray-100 text-gray-900 focus:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block text-gray-100">
              Email *
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email"
              className="w-full px-4 py-3 rounded-md border-gray-00 bg-gray-100 text-gray-900 focus:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block text-gray-100">
              Password *
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-100 text-gray-900 focus:border-violet-400"
            />
          </div>
          {/*  */}
          <div className="w-full flex flex-col gap-1">
            <label
              htmlFor="image"
              className="text-sm capitalize font-semibold "
            >
              Upload Image *
            </label>
            <label
              htmlFor="image"
              className="flex items-center gap-4 px-2 py-4 w-full 
                       border-2 border-dashed"
            >
              <RiImageAddFill className="w-16  h-16 text-primary"></RiImageAddFill>
              <input
                type="file"
                id="image"
                placeholder="image"
                name="image"
                className="placeholder: text-base "
                
              />
            </label>
            
          </div>
          {/*  */}
          <div className="space-y-1 text-sm">
            <label htmlFor="type" className="block  text-gray-100">
              Please Your Account Type *
            </label>
            <select
              name="types"
              className="select select-bordered w-full py-3 rounded-md text-black"
            >
              <option>Buyer</option>
              <option>Seller</option>
            </select>
          </div>
          <button className="block w-full p-3 text-center btn rounded-sm text-white bg-blue-600">
            SignUp
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
          <p className="px-3 text-sm text-gray-100">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button
            // onClick={googleHandel}
            aria-label="Log in with Google"
            className="p-3 rounded-sm"
          >
            <FcGoogle className="text-5xl font-bold" />
          </button>
        </div>
        <p className="text-xs text-center sm:px-6 text-gray-100">
          Don't have an account?
          <Link href="/Login"  className="underline text-gray-100">

            Login..
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
