import { BsCupHotFill } from "react-icons/bs";
import { TbArmchair2 } from "react-icons/tb";
import { GiHotMeal, GiMeal } from "react-icons/gi";
import { MdDiversity1, MdRoomService } from "react-icons/md";

const WhyUs = () => {
  return (
   <div className="my-10 ">
      <div className="md:ml-16 my-2 xl:ml-16 lg:ml-16 text-center md:text-left xl:text-left lg:text-left">
        <h1 className="text-7xl font-semibold ">Why Us</h1>
        <h3 className="text-base mt-3 font-semibold ">FOR ALL YOUR CATERING NEEDS </h3>
      </div>
      {/* section start */}
      <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 my-8  gap-5">
        {/* 1 */}
        <div className="md:my-4 items-center  my-2 xl:my-4 lg:my-4 md:flex xl:flex lg:flex md:text-left xl:text-left lg:text-left text-center">
          <div  className="w-16 mx-auto md:mr-3 xl:mr-3 lg:mr-3 ">
            <TbArmchair2 className="text-7xl  p-2"/>
          </div>
          <div>
            <h1 className="text-3xl mb-1 font-semibold">Exclusive Design</h1>
            <p className="text-base">Apparently we had reached a great height in the atmosphere.</p>
          </div>
        </div>
        {/* 2 */}
        <div className="md:my-4 items-center  my-2 xl:my-4 lg:my-4 md:flex xl:flex lg:flex md:text-left xl:text-left lg:text-left text-center">
          <div className="w-16 mx-auto md:mr-3 xl:mr-3 lg:mr-3 ">
            <BsCupHotFill className="text-7xl  p-2 " />
          </div>
          <div>
            <h1 className="text-3xl mb-1 font-semibold">Client Focused</h1>
            <p className="text-base">Apparently we had reached a great height in the atmosphere.</p>
          </div>
        </div>
        {/* 3 */}
        <div className="md:my-4 items-center  my-2 xl:my-4 lg:my-4 md:flex xl:flex lg:flex md:text-left xl:text-left lg:text-left   text-center">
          <div className="w-16 mx-auto md:mr-3 xl:mr-3 lg:mr-3 ">
            <GiMeal className="text-7xl  p-2 "/>
          </div>
          <div>
            <h1 className="text-3xl mb-1 font-semibold">Fresh Ingredients</h1>
            <p className="text-base">Apparently we had reached a great height in the atmosphere.</p>
          </div>
        </div>
        {/* 4 */}
        <div className="md:my-4 items-center  my-2 xl:my-4 lg:my-4 md:flex xl:flex lg:flex md:text-left xl:text-left lg:text-left   text-center">
          <div className="w-16 mx-auto md:mr-3 xl:mr-3 lg:mr-3 ">
            <MdDiversity1 className="text-7xl  p-2 "/>
          </div>
          <div>
            <h1 className="text-3xl mb-1 font-semibold">Diverse Client Base</h1>
            <p className="text-base">Apparently we had reached a great height in the atmosphere.</p>
          </div>
        </div>
        {/* 5 */}
        <div className="md:my-4 items-center  my-2 xl:my-4 lg:my-4 md:flex xl:flex lg:flex md:text-left xl:text-left lg:text-left   text-center">
          <div className="w-16 mx-auto md:mr-3 xl:mr-3 lg:mr-3 ">
            <GiHotMeal className="text-7xl  p-2 "/>
          </div>
          <div>
            <h1 className="text-3xl mb-1 font-semibold">Responsible Sourcing</h1>
            <p className="text-base">Apparently we had reached a great height in the atmosphere.</p>
          </div>
        </div>
        {/* 6 */}
        <div className="md:my-4 my-2 xl:my-4 items-center lg:my-4 md:flex xl:flex lg:flex md:text-left xl:text-left lg:text-left   text-center">
          <div className="w-16 mx-auto md:mr-3 xl:mr-3 lg:mr-3 ">
            <MdRoomService className="text-7xl  p-2 "/>
          </div>
          <div>
            <h1 className="text-3xl mb-1 font-semibold">Exclusive Design</h1>
            <p className="text-base">Apparently we had reached a great height in the atmosphere.</p>
          </div>
        </div>
      </div>
      {/* section end */}
    </div>
  );
};


export default WhyUs;
