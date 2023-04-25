'use client';
import Link from "next/link";
import { useState } from "react";
import ActiveLink from "../ActiveLink/ActiveLink";
// import { GoThreeBars } from "react-icons/go";
// import { GrFormClose } from "react-icons/gr";
// import { toast } from 'react-hot-toast';


const Navbar = () => {
  // const { user, logOut } = useContext(AuthContext)
  const user = true;
  const [isOpen, setIsOpen] = useState(false)
  // const [isDashBoard, setIsDashBoard] = useState(true)
  const handleLogOut = () => {
    // logOut()
    //   .then(() => {
    //     toast.success('logOut successfully')
    //   })
  }
  return (
    <header className="">
      <nav x-data="{ isOpen: false }" className="relative bg-white shadow dark:bg-gray-800">
        <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <Link href={'/'} className='flex items-center'>
              <img className="w-auto md:h-10 mr-2 h-7" src='' alt="" />
              <h4 className='text-3xl text-text_Primary font-DM_Serif font-bold'>EventSparkle</h4>
            </Link>
            <div className="flex  lg:hidden">

              <label htmlFor="dashboard-drawer" className="text-gray-500 btn btn-ghost dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                </svg>
              </label>  <button onClick={() => setIsOpen(!isOpen)} type="button" className="text-gray-500 md:hidden dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                {isOpen ?
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg> : <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                  </svg>}
              </button>

            </div>
          </div>

          {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
          <div className={`${isOpen ? 'translate-x-0 opacity-95 ' : 'opacity-0 -translate-x-full '}absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center`}>
            <div className="flex flex-col md:flex-row justify-items-center md:mx-6">
              {/* <Link className={router.pathname === "/" ? 'text-text_Secondry md:mx-4 md:my-0 my-2 text-lg font-medium' : "my-2 text-lg font-medium text-gray-800 transition-colors duration-300 transform  hover:text-text_Primary dark:hover:text-[#EEA800] md:mx-4 md:my-0"} href={'/'} >Home</Link> */}
              <Link className="my-2 text-lg font-medium text-text_Primary transition-colors duration-300 transform  hover:text-text_Secondry  md:mx-4 md:my-0" href={'/'}>Home</Link>
              {/* <ActiveLink activeClassName='text-text_Secondry md:mx-4 md:my-0 my-2 text-lg font-medium' className="my-2 text-lg font-medium text-gray-800 transition-colors duration-300 transform hover:text-text_Primary dark:hover:text-[#EEA800] md:mx-4 md:my-0" href="/">
                  Home
                </ActiveLink> */}
              {/* {
                  user ?
                    <>
                      <Link className={({ isActive }) => isActive ? 'text-text_Secondry md:mx-4 md:my-0 my-2 text-lg font-medium' : "my-2 text-lg font-medium text-gray-800 transition-colors duration-300 transform dark:text-gray-200 hover:text-text_Primary dark:hover:text-blue-400 md:mx-4 md:my-0"} href={'/dashboard'}>Dashboard</Link>
                      <Link onClick={handleLogOut} className="my-2 text-lg font-medium  transition-colors duration-300 transform text-gray-800 hover:text-text_Primary dark:hover:text-blue-400 md:mx-4 md:my-0" >Log Out</Link></> :
                    <Link className={({ isActive }) => isActive ? 'text-text_Secondry md:mx-4 md:my-0 my-2 text-lg font-medium' : "my-2 text-lg font-medium  transition-colors duration-300 transform text-gray-800 hover:text-text_Primary dark:hover:text-blue-400 md:mx-4 md:my-0"} href={'/login'}>Login</Link>
                } */}
            </div>

            {/* <div className="flex justify-center md:block">
                {user && <Link className="relative text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300" href={"#"}>
                  <div className="relative">
                    {user.photoURL ? <img className="object-cover w-12 h-12 rounded-full ring ring-gray-300 dark:ring-gray-600" src={user.photoURL} alt="" /> :
                      <img className="object-cover w-12 h-12 rounded-full ring ring-gray-300 dark:ring-gray-600" src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=" alt="" />
                    }
                  </div>
                </Link>} */}
            {/* </div> */}
          </div>
        </div>
      </nav >
    </header>
  );
};

export default Navbar;