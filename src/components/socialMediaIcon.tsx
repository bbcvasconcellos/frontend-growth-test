import { SocialMediaEnum } from "@/enum/socialMediaEnum";
import Image from "next/image";

interface ISocial {
  [key: string]: string
}

interface ISocialMediaKeyValue {
  icon: string;
  link: string;
}

interface SocialMediaIconProps {
  social: ISocial,
}

export const SocialMediaIcon = ({ social }: SocialMediaIconProps) => {
  const socialMediaLinks: string[] = Object.values(social);
  const socialMediaIcons: any[] = Object.entries(SocialMediaEnum);
  let socialMediaKeyValues: ISocialMediaKeyValue[] = [];

  for(let values of socialMediaIcons) {
    const [socialMediaName, socialMediaIcon] = values;
    const { src } = socialMediaIcon
    for(let link of socialMediaLinks) {
      if(link.includes(socialMediaName)) {
        socialMediaKeyValues.push({
          "icon": src,
          "link": link
        })
      }
    }
  }

  if(!socialMediaKeyValues) {
    return
  }
  
  return (
    <>
      {socialMediaKeyValues.map((value, index) => (
        <a 
          href={value.link} 
          key={index}
          target="_blank"
        >
          <Image 
            src={value.icon}
            alt={value.link}
            height={24}
            width={24}
          />
        </a>
      ))}
    </>
  )
      
}