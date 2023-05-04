"use client"
import Button from "@/Components/shared/Buttton";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { RiImageAddFill } from "react-icons/ri";

const SignUp = () => {
  const imageHostKey = "308e4450ac282711eb509e3c347b644b";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handelSignUp = (data) => {
    const name = data.username;
    const email = data.email;
    const image = data.image[0];
    const password = data.password;
    const type = data.type;
    const datas = { name, email, password, type };
    console.log(datas);

    const formData = new FormData();
    formData.append("image", image);
    fetch(`https://api.imgbb.com/1/upload?key=${imageHostKey}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        const img = imageData.data.url;
        console.log(img);
      });
  };

  const googleHandel = () => {};

  return (
    <div>
      <div className="w-full mx-auto my-6 max-w-md p-8 space-y-3 rounded-xl bg-bg_Primary text-gray-100">
        <h1 className="text-2xl text-text_Secondry  uppercase font-bold text-center">
          sign Up
        </h1>
        <form
          onSubmit={handleSubmit(handelSignUp)}
          className="space-y-6 uppercase ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block uppercase text-gray-100">
              User name *
            </label>
            <input
              type="text"
              id="username"
              {...register("username", {
                required: "must enter  name",
              })}
              placeholder="Username"
              className="w-full px-4 py-3 rounded-md border-gray-00 bg-gray-100 text-gray-900 focus:border-violet-400"
            />
            {errors.username && (
              <p className="text-red-600">{errors.username.message}</p>
            )}
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block uppercase text-gray-100">
              Email *
            </label>
            <input
              type="email"
              {...register("email", {
                required: "must enter email",
              })}
              id="email"
              placeholder="email"
              className="w-full px-4 py-3 rounded-md border-gray-00 bg-gray-100 text-gray-900 focus:border-violet-400"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email.message}</p>
            )}
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block uppercase text-gray-100">
              Password *
            </label>
            <input
              type="password"
              {...register("password", {
                required: "must enter product name",
              })}
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-100 text-gray-900 focus:border-violet-400"
            />
            {errors.password && (
              <p className="text-red-600">{errors.password.message}</p>
            )}
          </div>
          {/*  */}
          <div className="w-full flex flex-col gap-1">
            <label
              htmlFor="image"
              className="block text-sm uppercase text-gray-100"
            >
              Upload Image *
            </label>
            <label
              htmlFor="image"
              className="flex items-center gap-4 px-2 py-2 w-full 
                       border-2 border-dashed"
            >
              <RiImageAddFill className="w-14  h-14 text-primary"></RiImageAddFill>
              <input
                type="file"
                id="image"
                placeholder="image"
                {...register("image", {
                  required: "must enter product name",
                })}
                className="placeholder: text-base "
              />
              {errors.image && (
                <p className="text-red-600">{errors.image.message}</p>
              )}
            </label>
          </div>
          {/*  */}
          <div className="space-y-1 text-sm">
            <label htmlFor="type" className="block uppercase  text-gray-100">
              Please Your Account Type *
            </label>
            <select
              {...register("type", {
                required: "must enter product name",
              })}
              className="select select-bordered w-full py-3 rounded-md text-black"
            >
              <option>Buyer</option>
              <option>Seller</option>
            </select>
            {errors.type && (
              <p className="text-red-600">{errors.type.message}</p>
            )}
          </div>
          
          <Button
            className="block w-full p-3 text-center rounded-sm"
            varientColor={"secondary"}
            text={"Sign Up"}
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
            onClick={googleHandel}
            aria-label="Log in with Google"
            className="p-3 rounded-sm"
          >
            <FcGoogle className="text-5xl font-bold" />
          </button>
        </div>
        <p className="text-xs text-center sm:px-6 text-gray-100">
          Don't have an account?
          <Link href="/login" className="underline text-gray-100">
            Login..
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
