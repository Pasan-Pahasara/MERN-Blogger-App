import React from 'react'
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

interface SocialShareButtonsProps{
    url:any;
    title:any;
}

const SocialShareButtons = ({url, title }:SocialShareButtonsProps) => {
  return (
    <div className="w-full flex justify-between">
      <a
        target="_blank"
        rel="noreferrer"
        href={`=${url}`}
      >
        <FacebookIcon className="text-[#3b5998] w-12 h-auto" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={`=${url}`}
      >
        <InstagramIcon className="text-[#E1306C] w-12 h-auto" />
      </a>
    </div>
  )
}

export default SocialShareButtons