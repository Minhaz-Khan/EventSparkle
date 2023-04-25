import Marquee from "react-fast-marquee";
import "./style.css";

const Branding = () => {
  return (
    <div className=" bg-bg_Primary">
      <div className=" w-11/12 mx-auto py-5">
        <Marquee direction="right" speed={30} delay={5}>
          <div className="image_wrapper">
            <a href="/">
              <img src="https://i.ibb.co/Twv3Ch2/s1.png" alt="image" />
            </a>
          </div>
          <div className="image_wrapper">
            <a href="/">
              <img src="https://i.ibb.co/5MsNsWR/s2.png" alt="image" />
            </a>
          </div>
          <div className="image_wrapper">
            <a href="/">
              <img src="https://i.ibb.co/j58MJB5/s3.png" alt="image" />
            </a>
          </div>
          <div className="image_wrapper">
            <a href="/">
              <img src="https://i.ibb.co/Twv3Ch2/s1.png" alt="image" />
            </a>
          </div>
          <div className="image_wrapper">
            <a href="/">
              <img src="https://i.ibb.co/tQ73p2j/s4.png" alt="image" />
            </a>
          </div>
          <div className="image_wrapper">
            <a href="/">
              <img src="https://i.ibb.co/5MsNsWR/s2.png" alt="image" />
            </a>
          </div>
          <div className="image_wrapper">
            <a href="/">
              <img src="https://i.ibb.co/71vWBPt/s5.png" alt="image" />
            </a>
          </div>
          <div className="image_wrapper">
            <a href="/">
              <img src="https://i.ibb.co/Wz61SKH/s6.png" alt="image" />
            </a>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Branding;
