import { SetStateAction } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, X } from "lucide-react"
import brand from "../../assets/brand.svg";

interface MobileMenuProps {
  children: React.ReactNode;
  loginTitle: string;
  setIsMenuOpen: React.Dispatch<SetStateAction<boolean>>;
}

export const MobileMenu = ({ children, loginTitle, setIsMenuOpen }: MobileMenuProps) => {

  document.documentElement.style.overflowY = "hidden";

  const handleCloseMenu = () => {
    document.documentElement.style.overflowY = "auto";
    setIsMenuOpen(prevState => !prevState)
  }
  
  return (
    <div className="flex flex-col items-start h-screen w-screen fixed top-0 left-0 z-50 bg-black px-6 pb-10">
      <div className="flex w-full justify-between items-center py-6 mb-3">
        <Image src={brand} alt="brand icon" height={21}/>
        <X 
          onClick={() => handleCloseMenu()}
          size={13} 
        />
      </div>
      {children}
      <Link href="/" className="flex mt-auto">
        {loginTitle}
        <ArrowRight size={24} /> 
      </Link>
    </div>
  )
}