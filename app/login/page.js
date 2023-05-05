"use client";
import Button from "@/Components/shared/Buttton";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    const email = data.email;
    const password = data.password;
    const datas = { email, password };
    console.log(datas);
  };
  const handelGoogle = () => { };
  return (
    <div>
      <div className="w-full max-w-md p-8 mx-auto my-6 bg-bg_Primary shadow-lg shadow-blue-500/50  space-y-3 rounded-xl text-gray-100">
        <h1 className="text-2xl text-text_Secondry  uppercase font-bold text-center">
          Log in
        </h1>
        <form
          onSubmit={handleSubmit(handleLogin)}
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block uppercase text-gray-100">
              Email
            </label>
            <input
              required
              type="email"
              {...register("email", {
                required: "must enter  email",
              })}
              id="email"
              placeholder="email"
              className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-100 text-gray-900 focus:border-blue-400"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email.message}</p>
            )}
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block uppercase text-gray-100">
              Password
            </label>
            <input
              required
              type="password"
              {...register("password", {
                required: "must enter password",
              })}
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-100 text-gray-900 focus:border-blue-400"
            />
            {errors.password && (
              <p className="text-red-600">{errors.password.message}</p>
            )}
            <div className="flex justify-end text-xs   text-gray-100">
              <button type="Link"> Forgot Password?</button>
            </div>
          </div>

          <Button
            className="block w-full p-3 text-center rounded-sm"
            varientColor={"secondary"}
            text={"Log in"}
          ></Button>
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
            onClick={handelGoogle}
            aria-label="Log in with Google"
            className="p-3 rounded-sm"
          >
            <FcGoogle className="text-5xl font-bold" />
          </button>
        </div>
        <p className="text-xs text-center sm:px-6 text-gray-100">
          Don't have an account?
          <Link href="/signUp" className="underline text-gray-100">
            sign Up..
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
