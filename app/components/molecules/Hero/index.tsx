import React, { useState } from 'react'
import Image from 'next/image'
import HeroTitleText from '../../atoms/HeroTitleText'
import HeroMainText from '../../atoms/HeroMainText'
import PrincipalButton from '@/app/components/atoms/Buttons/PrinciplaButton'
import ContactModal from '@/app/components/molecules/ContactModal'

const Hero = () => {

      const [isOpen, setIsOpen] = useState(false)

      return (
            <div className='flex flex-row items-center justify-between w-full min-h-125px px-8 py-12 bg-white dark:bg-secondary rounded-lg transition-colors duration-300'>
                  <div className='flex flex-col flex-1 max-w-xl pl-12'>
                        <HeroTitleText />
                        <div className='mt-5'>
                              <HeroMainText />
                        </div>
                        <div className='mt-10'>
                              <PrincipalButton 
                                    text='HIRE ME'
                                    onClick={() => setIsOpen(true)}
                              />
                        </div>
                        <ContactModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
                  </div>

                  <div className='relative flex shrink-0 ml-8 mr-12'>
                        <Image
                              src='/avatar2.png'
                              alt='avatar2'
                              width={400}
                              height={500}
                              className='object-contain'
                        />
                  </div>
            </div>
      )
}

export default Hero