
import { RxDashboard } from "react-icons/rx";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { AiOutlineBars, AiOutlineGift, AiOutlineShoppingCart } from "react-icons/ai";
import { FiUsers, FiSettings } from "react-icons/fi";
import { BiUser } from "react-icons/bi";

const SideBar = () => {
    

  const sideNavItem = [
    {
      name: "dashbord",
      icon: <RxDashboard />,
      link: "../admin/dashbord",
    },
    {
      name: "products",
      icon: <RiShoppingBag3Fill />,
      link: "../admin/products",
    },
    {
      name: "category",
      icon: <AiOutlineBars />,
      link: "../admin/category",
    },
    {
      name: "customers",
      icon: <FiUsers />,
      link: "../admin/customers",
    },
    {
      name: "orders",
      icon: <AiOutlineShoppingCart />,
      link: "../admin/orders",
    },
    {
      name: "coupons",
      icon: <AiOutlineGift />,
      link: "../admin/coupons",
    },
    {
      name: "our staff",
      icon: <BiUser />,
      link: "../admin/ourStaff",
    },
    {
      name: "setting",
      icon: <FiSettings />,
      link: "../admin/setting",
    },
  ];
  return (
    <div>
        {
            sideNavItem.map(navlink=><>
            <p>{navlink.name}
            </p>
            </>)
        }
        </div>
  )
};

export default SideBar;
