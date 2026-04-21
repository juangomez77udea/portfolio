"use client"

import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaTiktok, FaGithub } from 'react-icons/fa'
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from 'react-icons/fa6'
import { IconType } from 'react-icons'

type SocialNetwork = 'instagram' | 'facebook' | 'twitter' | 'linkedin' | 'youtube' | 'tiktok' | 'github'

const socialIcons: Record<SocialNetwork, IconType> = {
      instagram: RiInstagramFill,
      facebook: FaFacebookF,
      twitter: FaXTwitter,
      linkedin: FaLinkedinIn,
      youtube: FaYoutube,
      tiktok: FaTiktok,
      github: FaGithub,
}

interface CircleButtonProps {
      social: SocialNetwork
      href: string
      size?: number
      ariaLabel?: string
}

const index = ({ social, href, size = 20, ariaLabel }: CircleButtonProps) => {
      const handleClick = () => {
            window.open(href, '_blank', 'noopener,noreferrer')
      }

      const SocialIcon = socialIcons[social]

      return (
            <button
                  onClick={handleClick}
                  aria-label={ariaLabel ?? social}
                  className=" flex items-center justify-center w-10 h-10 rounded-full bg-primary text-blanco hover:bg-tertiary hover:text-white transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 hover:cursor-pointer"
            >
                  <SocialIcon size={size} />
            </button>
      )
}

export default index