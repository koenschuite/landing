"use client";
import TitleEffect from "@/components/text/TitleEffect";

export default function Home() {

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
