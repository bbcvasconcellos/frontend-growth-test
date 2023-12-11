import Link from "next/link"
import { ArrowUpRight } from "lucide-react";
interface ModuleCardProps {
  title: string;
  description: string;
  buttonText: string;
  buttonURL: string;
}

export const ModuleCard = ({ title, description, buttonText, buttonURL }: ModuleCardProps) => {
  return (
    <div className="grid grid-rows-2 bg-bgModulesCard p-5 rounded-2xl gap-10 max-h-44 min-w-[280px] max-w-[397px] w-fit mr-6">
      <div>
        <h1 className="text-xl font-medium mb-2">{title}</h1>
        <p className="text-support-text-module">{description}</p>
      </div>
      <Link href={buttonURL} className="flex items-center text-support-text-blue gap-5">
        {buttonText}
        <ArrowUpRight size={24}/>
      </Link>
    </div>
  )
}