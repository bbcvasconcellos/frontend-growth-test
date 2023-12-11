"use client"

import { useLanguage } from "@/context/useLanguage";
import { FeatureCard } from "@/components/featureCard";

interface CardProps {
  id: number;
  title: string;
  description: string; 
  icon: string & number; 
}

export default function Features() {
  const { pageLanguageData } = useLanguage();
  const [,featureSection] = pageLanguageData;
  
  return (
    <section className="md:min-h-[571px] w-screen flex flex-col items-center py-20 md:px-32 px-5 gap-10">
      <div className="flex flex-col gap-3 text-center md:max-w-[585px] md:w-full">
        <h6 className="text-support-text-blue text-sm">{featureSection.preTitle}</h6>
        <h2 className="text-3xl font-medium">{featureSection.title}</h2>
        <p className="text-support-text text-lg">
          {featureSection.description}
        </p>
      </div>
      <div className="grid md:grid-cols-3 grid-flow-row gap-12 md:max-w-[1240px]">
        {featureSection.cards.map((card: CardProps) => 
          <FeatureCard 
            description={card.description} 
            icon={card.icon} 
            title={card.title}
            key={card.id}
          />
        )}
      </div>
    </section>
  )
}