import Link from "next/link";

const Footer = () => {
    return (
        <footer className="py-5 bg-black text-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-7 mx-8">
          <div className="col-span-2">
            <h3 className="text-3xl mb-3">EventSparkle</h3>
            <p>Hi, I’m Samantha, a wedding planner, and designer who loves life in the wonderful New York. The nestam acuam nec odio the elementum.</p>
          </div>
          <div className="col-span-1">
            <h3 className="mb-3 text-3xl">Explore</h3>
            <ul>
              <li className="my-2">
                <Link href={"#"} className="hover:text-slate-500">
                  About
                </Link>
              </li>
              <li className="my-2">
                <Link href={"#"} className="hover:text-slate-500">
                  Services
                </Link>
              </li>
              <li className="my-2">
                <Link href={"#"} className="hover:text-slate-500">
                  Portfolio
                </Link>
              </li>
              <li className="my-2">
                <Link href={"#"} className="hover:text-slate-500">
                  Gallery
                </Link>
              </li>
              <li className="my-2">
                <Link href={"#"} className="hover:text-slate-500">
                  Blog
                </Link>
              </li>
              <li className="my-2">
                <Link href={"#"} className="hover:text-slate-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-2">
            <h3 className="mb-3 text-3xl">Get In Touch</h3>
            <address>
                <p>1010 Broadway NY, New York 10001
United States of America</p>
              <a className="mb-2 inline-block" href="tel:+8801789000000">
                Mob: +8801789-000000
              </a>
              <br />
              <a href="mailto:EventSparkle@gmail.com" className="border-b">EventSparkle@gmail.com</a>
            </address>
          </div>
        </div>
        <div className="mt-3">
          <p className="p-2 text-center">
            Copyright © 2023, EventSparkle All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
    );
};

export default Footer;