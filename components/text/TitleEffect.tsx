"use client";
import { useEffect } from "react";
import "./TitleEffect.css";


export default function TitleEffect() {
  useEffect(() => {
    const h1Element = document.querySelector("h1");

    if (h1Element) {
      h1Element.addEventListener("mouseover", (event:any) => {
        let iterations = 0;
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
        
        const interval = setInterval(() => {
          event.target.innerText = event.target.innerText
            .split("")
            .map((letter:any, index:number) => {
              if(index < iterations){
                  return event.target.dataset.value[index];
              }
              return letters[Math.floor(Math.random() * 26)];
            })
            .join("");
            
            if(iterations >= event.target.dataset.value.length) clearInterval(interval);
            
            iterations += 1/3;
        }, 50);
      });
    }
  }, []);




  return <h1 data-value="DATAPONTE" className="title-effect">DATAPONTE</h1>;
}
