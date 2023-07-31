
"use client"
import Lottie from "lottie-react";
import Link from "next/link";
import heroAnimation from "./animation/hero.json";

const style = {
    height: 300,
  };
  
export default function Heros() {
  return (
    <main className="m-12 lg:m-24 sm:m-12 grid md:grid-cols-2 items-center">
        <div className="col-span-1">
            <h5 className="uppercase tracking-wider font-light font-md text-gray-100">What is data control?</h5>
            <h2 className="font-medium text-white text-xl md:text-2xl lg:text-4xl tracking-widest leading-relaxed mt-2">
                The Future of Sharing <br />
                Data with the World
            </h2>
            
            <div className="text-gray-300 tracking-wider leading-relaxed font-light  border-l my-12 pl-12 ">
                With the overwhelming amount of data available today, it is hard to keep track of your data. 
                With out solution you are able to keep track of you shared data.
            </div>
            <div>
                <Link 
                    href="https://vimeo.com/831227384"
                    target="_blank"
                    className="outline outline-blue-200 px-2 py-1 rounded-md tracking-wider font-light font-monospace text-blue-200">Watch Video</Link>
            </div>
        </div>
        <div className="col-span-1 m-24">
           <Lottie animationData={heroAnimation} style={style} />  
        </div>
    </main>
  )
}
