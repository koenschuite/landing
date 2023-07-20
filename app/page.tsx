"use client";
import TitleEffect from "@/components/text/TitleEffect";

export default function Home() {
  /* -- Glow effect -- */

  const blob = document.getElementById("blob");

  window.onpointermove = (event) => {
    const { clientX, clientY } = event;

    blob?.animate(
      {
        left: `${clientX}px`,
        top: `${clientY}px`,
      },
      { duration: 3000, fill: "forwards" }
    );
  };

  return (

      <main className="z-20 flex min-h-screen flex-col items-center justify-center p-24 text-center">
        <div>
          <TitleEffect />
          <span className="text-gray-400 text-lg">
            We will be launching soon!
          </span>
        </div>
      </main>
  );
}
