"use client"

import Image from "next/image";
import { FeatureIconsEnum } from "@/enum/featureIconsEnum";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string & number;
}

export const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {    
  return (
    <div className="flex flex-col gap-4">
      <Image src={FeatureIconsEnum[icon]} alt={icon} width={24} height={24}/>
      <div className="text-left">
        <h6 className="font-semibold mb-2">{title}</h6>
        <p className="text-support-text text-sm">{description}</p>
      </div>
    </div>
  )
}