"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Menu } from "lucide-react"

import { useLanguage } from "@/context/useLanguage"
import { MobileMenu } from "./mobileMenu"

import brand from "../../assets/brand.svg"

export const Navbar = () => {
  const { globalLanguageData } = useLanguage();
  const [[ modules, resources, pricing, contactSales, login ]] = globalLanguageData;  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavMenu = () => {
    return (
      <div className="flex flex-col md:flex-row gap-5 md:items-center text-sm md:max-w-[430px] md:w-full md:justify-between text-notActive">
        <Link href="#modules" className="hover:text-white hover:ease-in duration-300">{modules.title}</Link>
        <Link href="#resources" className="hover:text-white hover:ease-in duration-300">{resources.title}</Link>
        <Link href="#pricing" className="hover:text-white hover:ease-in duration-300">{pricing.title}</Link>
        <Link href="#cta" className="hover:text-white hover:ease-in duration-300">{contactSales.title}</Link>
      </div>
    )
  }
  
  return (
    <nav className="w-full flex items-center justify-between bg-transparent md:px-32 py-6 px-6 text-white fixed z-10">
      <Image src={brand} alt="brand icon" height={21} />
      <div className="md:block hidden">
        <NavMenu />
      </div>
      <div className="md:hidden">
        <Menu size={18} onClick={() => setIsMenuOpen(prevState => !prevState)}/>
        {isMenuOpen ? 
          <MobileMenu 
            loginTitle={login.title}
            setIsMenuOpen={setIsMenuOpen}
          >
            <NavMenu/>
          </MobileMenu>
          : <></>}
      </div>
      <Link href="/" className="md:flex hidden">
        {login.title}
        <ArrowRight size={24} /> 
      </Link>
    </nav>
  )
}