"use client"

import Image from "next/image"
import { useLanguage } from "@/context/useLanguage"
import brand from "../../assets/brand.svg"
import { SocialMediaIcon } from "./socialMediaIcon"

export const Footer = () => {
  const { language, setLanguage, globalLanguageData } = useLanguage();
  const [ , social, footerMenu, helpText, copyright ] = globalLanguageData;

  return (
    <footer className="flex md:justify-center w-screen md:min-h-[480px] md:px-32 md:py-20 px-6 py-10 relative z-0">
      <div className="flex flex-col md:justify-between gap-12 md:max-w-[1240px] md:w-full">
        <div className="flex md:flex-row flex-col md:items-center justify-between items-start">
          <div className="flex flex-col gap-10 md:mr-4 lg:mr-0">
            <div>
              <Image src={brand} alt="brand icon" height={32}/>
              <p className="text-support-text">{helpText}</p>
            </div>
            <select 
              className="text-white bg-white bg-opacity-10 px-4 py-2 rounded-lg max-w-[211px]"
              onChange={e => setLanguage(e.target.value)}
              value={language}
            >
              <option value={"en"}>English</option>
              <option value={"pt"}>Português</option>
            </select>
            <div className="flex flex-row gap-5 md:gap-2 lg:gap-5">
              <SocialMediaIcon social={social}/>
            </div>
          </div>
          <div className="grid md:grid-cols-3 xl:gap-5 md:gap-0 gap-4 mt-10">
            {footerMenu.map((menu: any) => (
              <div 
                className=" w-40 mb-4"
                key={menu.id}
              >
                <h4 className="font-semibold text-sm opacity-40 mb-5 uppercase">
                  {menu.title}
                </h4>
                <div className="flex flex-col gap-4">
                  {menu.dropdown.map((dd: any, key: number) => 
                    <a 
                      href={dd.link}
                      className="font-semibold opacity-60 capitalize hover:opacity-100 hover:ease-in duration-300"
                      key={`${dd.id}-${key}`}
                    >
                      {dd.title}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex md:flex-row flex-col-reverse justify-between pt-8 border-t-[1px] border-white border-opacity-40">
          <span className="opacity-40">{copyright}</span>
          <div className="flex items-center">
            <span className="opacity-40">Status</span>
            <div className="w-[0.375rem] h-[0.375rem] bg-status rounded-full mx-[0.375rem]"/>
            <span className="text-status"> All systems are normal</span>
          </div>
        </div>
      </div>
    </footer>
  )
}