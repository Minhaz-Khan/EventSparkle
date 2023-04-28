'use client'

import { useRef, useEffect } from "react";
import Fade from 'react-reveal/Fade';
const SlideCondition = ({ slide, isActive }) => {
    const textRef = useRef(null);
    const { text1, text2, text3, text4, text5, pic } = slide;

    useEffect(() => {
        if (isActive) {
            const timeoutId = setTimeout(() => {
                textRef.current.classList.add("opacity-100");
            }, 20000);

            return () => clearTimeout(timeoutId);
        } else {
            textRef.current.classList.remove("opacity-100");
        }
    }, [isActive]);
    return (
        <div>

            <p ref={textRef}
                className={` text-[12px] opacity-0 transition-opacity duration-1000 ease-out delay-100 ${isActive ? "opacity-100 text-1" : ""
                    }`}>{text1}</p>
            <p ref={textRef}
                className={`text-[36px] opacity-0 transition-opacity duration-1000 ease-out delay-100 ${isActive ? "opacity-100 text-1" : ""
                    }`}>{text2}</p>
            <p ref={textRef}
                className={`text-[36px] opacity-0 transition-opacity duration-1000 ease-out delay-100 ${isActive ? "opacity-100 text-1" : ""
                    }`}>{text3}</p>
            <p ref={textRef}
                className={`text-[16px] opacity-0 transition-opacity duration-1000 ease-out delay-100 ${isActive ? "opacity-100 text-1" : ""
                    }`}>{text4}</p>
            <p ref={textRef}
                className={`opacity-0 transition-opacity duration-1000 ease-out delay-100 ${isActive ? "opacity-100 text-1" : ""
                    }`}>{text5}</p>

        </div>
    );
};

export default SlideCondition;