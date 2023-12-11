"use client"
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ModuleCard } from "@/components/moduleCard";
import { useLanguage } from "@/context/useLanguage";

interface Button {
  text: string;
  url: string;
}

interface ModuleCardProps {
  id: number;
  title: string;
  description: string;
  button: Button;
}

export default function Modules() {
  const { pageLanguageData } = useLanguage();
  const [,, moduleSection ] = pageLanguageData;
  
  return (
    <section id="modules" className="w-screen md:min-h-[489px] md:flex md:justify-center md:px-32 md:py-20 px-6 py-10 bg-bgModules overflow-y-hidden">
      <div className="flex flex-col gap-10 md:max-w-[1240px] md:w-full md:min-w-0">
      <div className="flex flex-row items-center justify-between">
        <div className="md:w-[45%] w-full">
          <h2 className="font-medium text-3xl mb-3">{moduleSection.title}</h2>
          <p className="text-lg">
            {moduleSection.description}
          </p>
        </div>
        <div className="md:grid md:grid-cols-2 md:gap-2 hidden">
          <button 
            className="h-11 w-11 rounded-full bg-white flex items-center justify-center"
          >
            <ArrowLeft size={16} color="black"/>
          </button>
          <button 
            className="h-11 w-11 rounded-full bg-white flex items-center justify-center"
          >
            <ArrowRight size={16} color="black"/>
          </button>
        </div>
      </div>
      <div className="flex gap-6 overflow-y-hidden">
        {moduleSection.cards.map((card: ModuleCardProps) => (
          <ModuleCard 
            title={card.title} 
            description={card.description} 
            buttonText={card.button.text}
            buttonURL={card.button.url}
            key={card.id} 
          />
        ))}
      </div>
      </div>
    </section>
  )
}