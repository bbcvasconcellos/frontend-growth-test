"use client"

import { useLanguage } from "@/context/useLanguage"

interface Button {
  id: number;
  text: string
}

export default function Cta() {
  const { pageLanguageData } = useLanguage();
  const ctaSection = pageLanguageData?.at(-1);
  
  return (
    <section id="cta" className="flex justify-center md:px-32 md:py-20 px-6 py-14 w-screen md:min-h-[386px]">
      <div className="flex flex-col items-center gap-10 text-center md:max-w-[742px] md:w-full">
      <div>
        <h2 className="font-semibold md:text-5xl text-4xl mb-5">
          {ctaSection.title}
        </h2>
        <p className="text-support-text-cta text-lg">
          {ctaSection.description}
        </p>
      </div>
      {ctaSection.buttons.map((button: Button) => (
        <button className="bg-button-blue px-6 py-3 rounded-xl max-w-[10rem] hover:brightness-75 hover:ease-in duration-300" key={button.id}>{button.text}</button>
      ))}
      </div>
    </section>
  )
}