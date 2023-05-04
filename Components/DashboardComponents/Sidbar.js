import { RxDashboard, RxGear } from "react-icons/rx";
import { HiOutlineClipboardList } from "react-icons/hi";
import { AiOutlineUnlock, AiOutlineUnorderedList } from "react-icons/ai";
import Link from "next/link";


const SideBar = () => {

  const userSideNavItems = [
    {
      _id: "1",
      title: "Dashboard",
      icon: <RxDashboard />,
      link: "/clientDashboard/dashboard",
    },
    {
      _id: "2",
      title: "My Orders",
      icon: <AiOutlineUnorderedList />,
      link: "/clientDashboard/order",
    },
    {
      _id: "3",
      title: "Update Profile",
      icon: <RxGear />,
      link: "/clientDashboard/update-profile",
    },
    {
      _id: "4",
      title: "Change Password",
      icon: <HiOutlineClipboardList />,
      link: "/clientDashboard/change-password",
    },
    {
      _id: "5",
      title: "Log Out",
      icon: <AiOutlineUnlock />,
      link: "#",
    },
  ];
  return (
    <div>
        {
            userSideNavItems.map(navlink=><div key={navlink._id}>
                <Link href={navlink.link}
                className="flex items-center gap-2 hover:text-primary p-2 cursor-pointer"
               
               >{navlink.icon} {" "} {navlink.title}</Link>
            </div>)
        }
    </div>
  )
};

export default SideBar;
