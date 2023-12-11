"use client"

import { useLanguage } from "@/context/useLanguage"
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const { pageLanguageData } = useLanguage();
  const [heroSection] = pageLanguageData;  
    
  return (
    <section className="flex justify-center md:h-[600px] w-screen bg-[url('../../assets/bg-moises-developer.svg')] bg-cover bg-center 
    md:px-40 md:py-36 px-6 py-28">
      <div className="md:max-w-[607px] md:w-full flex flex-col gap-10 text-center">
        <div className="flex flex-col items-center gap-5 text-center justify-center">
          <h1 className="md:text-hero text-5xl text-center font-medium">
            {heroSection.title}
          </h1>
          <p className="text-center text-support-text text-lg">
            {heroSection.description}
          </p>
        </div>   
        <div className="flex justify-center items-center gap-3">
          <button className="bg-button-blue px-6 py-3 rounded-xl max-w-fit hover:brightness-75 hover:ease-in duration-300">{heroSection.buttons[0].text}</button>
          <button className="px-6 py-3 rounded-xl flex gap-2 hover:brightness-75 hover:ease-in duration-300">
            {heroSection.buttons[1].text}
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
    </section>
  )
} 