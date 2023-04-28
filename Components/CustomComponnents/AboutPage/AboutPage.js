import Button from '@/Components/shared/Buttton';
import React from 'react';
import './AboutPage.css';

const dates = [
    {
        country: 'switzerland',
        date: 'september : 2023'
    },
    {
        country: 'switzerland',
        date: 'september : 2023'
    },
    {
        country: 'switzerland',
        date: 'september : 2023'
    },
    {
        country: 'switzerland',
        date: 'september : 2023'
    },

];

const faqQuestions = [
    {
        ques: "How do I plan a wedding in three months?",
        ans: "Wedding aliquet orci elit gene tristique in lorem dream vitanem alisuam tincidunten felis sedat bir ravida alisuam neque liberta hendrerit manas the amentane the mollis erase."
    },
    {
        ques: "Do we need a wedding planner?",
        ans: "Wedding aliquet orci elit gene tristique in lorem dream vitanem alisuam tincidunten felis sedat bir ravida alisuam neque liberta hendrerit manas the amentane the mollis erase."
    },
    {
        ques: "How do you plan a destination wedding?",
        ans: "Wedding aliquet orci elit gene tristique in lorem dream vitanem alisuam tincidunten felis sedat bir ravida alisuam neque liberta hendrerit manas the amentane the mollis erase."
    },
    {
        ques: "How should you deal with wedding stress?",
        ans: "Wedding aliquet orci elit gene tristique in lorem dream vitanem alisuam tincidunten felis sedat bir ravida alisuam neque liberta hendrerit manas the amentane the mollis erase."
    },
];

const AboutPage = () => {
    return (
        <div>

            <section className="relative  banner h-screen " style={{
                backgroundImage: `url("https://webredox.net/demo/wp/florya/wp-content/uploads/2022/11/about2.jpg")`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed'
            }}>
                <div className="card bg-white absolute bottom-10 md:bottom-32  left-10 md:left-20  p-10 font-serif w-min md:w-max">
                    <p className="tracking-widest">FLORYA WEDDINGS</p>
                    <h2 className="text-4xl my-4">Sabbir Chowdhury</h2>
                    <p>I am Samantha, wedding planner for colorful couples, <br /> a hopeless romantic who loves bold statements.</p>
                </div>

                <a href="#about">
                    <svg className="arrows z-10 hidden md:block ">
                        <path className="a1" d="M0 0 L30 32 L60 0"></path>
                        <path className="a2" d="M0 20 L30 52 L60 20"></path>
                        <path className="a3" d="M0 40 L30 72 L60 40"></path>
                    </svg>

                </a>
            </section>

            <section id="about" className="p-5 container mx-auto about my-20 flex flex-col md:flex-row items-center justify-center gap-20">

                <div className=" basis-1/2 content font-serif">
                    <h4 className="uppercase text-xl">about us</h4>
                    <h2 className="text-3xl  my-2">Wedding Party</h2>
                    <p className="leading-7 mb-3">You can choose any country with good tourism wedding elementum sesue the aucan vestibulum aliquam justo in sapien rutrum volutpat. Donec in quis the pellentesque velit florya id velit ac arcu posuere blane.</p>
                    <p className="leading-7 border-b border-bg_Primary pb-4">Wedding nissuam nestibulum ac quam nec odio elementum ceisue the miss varius natoque penatibus et magnis dis parturient monte.</p>
                    <p className="mt-4">Sabbir Chowdhury</p>
                    <p className="text-sm text-gray-600">Wedding Planner</p>
                </div>
                <div className="img h-96">
                    <img className="h-full " src='https://webredox.net/demo/wp/florya/wp-content/uploads/2022/11/about.jpg' alt="" />
                </div>
            </section>



            <section className="my-10 py-20 bg-bg_Primary text-white">
                <div className="flex flex-col md:flex-row items-center justify-center container mx-auto p-5  gap-20">
                    <div className="basis-1/2 ">
                        <p className="uppercase tracking-widest mb-2">DateLine</p>
                        <h2 className="text-4xl">Wedding Dates</h2>
                        <p className="leading-7 tracking-wider	my-6">Your at-a-glance guide to where I stand on all the truly important things. Wedding elit miss the eget the solin miss citudino selus rutrum in miss vestibulum eleifen ornare torto.</p>
                        <Button text="Get in touch" varientColor="secondary" className="font-sans" />
                    </div>

                    <div className="w-96">
                        {
                            dates.map((date, ind) => {
                                return <div key={ind} className="w-full" >
                                    <h2 className="mb-3 text-center">{ind + 1}. <span className="capitalize text-2xl">{date.country}</span></h2>
                                    <p className="text-center tracking-wider mb-4 border-b w-full border-gray-400 pb-4">{date.date}</p>
                                </div>;
                            })
                        }
                    </div>
                </div>
            </section>

            <section className="p-5 container mx-auto about my-20 flex flex-col md:flex-row-reverse items-center justify-center gap-20">
                <div className=" basis-1/2 content font-serif">
                    <h2 className="text-3xl  my-2">Jesica | Event Planner</h2>
                    <p className="leading-7 mb-3">You can choose any country with good tourism wedding elementum sesue the aucan vestibulum aliquam justo in sapien rutrum volutpat. Donec in quis the pellentesque velit florya id velit ac arcu posuere blane.</p>
                    <p className="leading-7 border-b border-bg_Primary pb-4">Wedding nissuam nestibulum ac quam nec odio elementum ceisue the miss varius natoque penatibus et magnis dis parturient monte.</p>

                </div>
                <div className="img  h-96">
                    <img className="h-full " src='https://webredox.net/demo/wp/florya/wp-content/uploads/2022/11/team1.jpg' alt="" />
                </div>
            </section>

            <section className="p-5 container mx-auto about my-20 flex flex-col md:flex-row items-center justify-center gap-20">

                <div className=" basis-1/2 content font-serif">
                    <h2 className="text-3xl  my-2">Jesia | Wedding Party</h2>
                    <p className="leading-7 mb-3">You can choose any country with good tourism wedding elementum sesue the aucan vestibulum aliquam justo in sapien rutrum volutpat. Donec in quis the pellentesque velit florya id velit ac arcu posuere blane.</p>
                    <p className="leading-7 border-b border-bg_Primary pb-4">Wedding nissuam nestibulum ac quam nec odio elementum ceisue the miss varius natoque penatibus et magnis dis parturient monte.</p>

                </div>
                <div className="img h-96">
                    <img className="h-full w-full" src='https://webredox.net/demo/wp/florya/wp-content/uploads/2022/11/team2.jpg' alt="" />
                </div>
            </section>

            <section className="bg-bg_Primary py-10">
                <div className="p-5 container mx-auto about my-20 flex flex-col md:flex-row items-center justify-center gap-20">

                    <div className=" basis-1/2 md:px-10 content font-serif text-gray-100">
                        <h2 className="text-3xl ">FAQ | Wedding Questions</h2>
                        <p className="leading-7 my-5">You can choose any country with good tourism wedding elementum sesue the aucan vestibulum aliquam justo in sapien rutrum volutpat. Donec in quis the pellentesque velit florya id velit ac arcu posuere blane.</p>
                        <p className="leading-7 border-b border-bg_Primary pb-4">Wedding nissuam nestibulum ac quam nec odio elementum ceisue the miss varius natoque penatibus et magnis dis parturient monte.</p>
                    </div>

                    <div className="basis-1/2">
                        {
                            faqQuestions.map(faq => {
                                return <div tabIndex={0} className="collapse  mb-2 collapse-plus border border-base-300 bg-base-100 p-2">
                                    <div className="collapse-title text-xl font-medium">
                                        {faq.ques}
                                    </div>
                                    <div className="collapse-content">
                                        <p>{faq.ans}</p>
                                    </div>
                                </div>;
                            })
                        }
                    </div>
                </div>
            </section>


            <section className="flex flex-col md:flex-row items-center justify-center gap-20">

                <div className="basis-1/2 signup-img img-hover">
                    <img className="h-full w-full" src='https://webredox.net/demo/wp/florya/wp-content/uploads/2022/11/signup.jpg' alt="" />
                </div>
                <div className=" basis-1/2 content font-serif">
                    <h2 className="text-3xl  my-2">SIGN UP</h2>
                    <p className="leading-7 mb-5 text-2xl ">Subscribe our chennel</p>

                    <div>
                        <label htmlFor="password" className="sr-only">Password</label>
                        <div className="border border-black my-4">
                            <input
                                type="password"
                                className="w-full outline-none   p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter Email"
                            />
                        </div>
                        <div className="border border-black">
                            <input
                                type="password"
                                className="w-full outline-none   p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter password"
                            />
                        </div>
                        <Button text="subscribe" varientColor="primary" className="font-sans mt-5" />
                    </div>
                </div>

            </section>

        </div >
    );
};

export default AboutPage;