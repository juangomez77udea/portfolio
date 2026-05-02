'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import HeroTitleText from '../../atoms/HeroTitleText'
import HeroMainText from '../../atoms/HeroMainText'
import PrincipalButton from '@/app/components/atoms/Buttons/PrincipalButton'
import ContactModal from '@/app/components/molecules/ContactModal'

const Hero = () => {
      const [isOpen, setIsOpen] = useState(false)

      return (
            <>
                  <div className='flex flex-col-reverse md:flex-row items-center justify-between w-full px-4 py-8 md:px-8 md:py-12 bg-white dark:bg-secondary rounded-lg transition-colors duration-300'>

                        {/* Text content */}
                        <div className='flex flex-col flex-1 max-w-xl text-center md:text-left md:pl-12 mt-6 md:mt-0'>
                              <HeroTitleText />
                              <div className='mt-5'>
                                    <HeroMainText />
                              </div>
                              <div className='mt-10 flex justify-center md:justify-start'>
                                    <PrincipalButton
                                          text='HIRE ME'
                                          onClick={() => setIsOpen(true)}
                                    />
                              </div>
                        </div>

                        {/* Avatar */}
                        <div className='relative flex shrink-0 md:ml-8 md:mr-12'>
                              <Image
                                    src='/avatar2.png'
                                    alt='avatar2'
                                    width={400}
                                    height={500}
                                    className='object-contain w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-auto'
                                    loading='eager'
                                    priority
                              />
                        </div>
                  </div>

                  <ContactModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
            </>
      )
}

export default Hero