"use client";
import "./TitleEffect.css";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export default function TitleEffect() {
  document.querySelector("h1")?.addEventListener("mouseover", (event:any) => {
    let iterations = 0;
    
    const interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter:any, index:number) => {
          if(index < iterations){
              return event.target.dataset.value[index];
          }
          return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
        
        if(iterations >= event.target.dataset.value.length) clearInterval(interval);
        
        iterations += 1/3;
    }, 50);
  });
  return <h1 data-value="DATAPONTE" className="title-effect">DATAPONTE</h1>;
}
