import React from 'react'
import Image from 'next/image'
import HeroTitleText from '../../atoms/HeroTitleText'
import HeroMainText from '../../atoms/HeroMainText'
import PrincipalButton from '@/app/components/atoms/Buttons/PrinciplaButton'

const index = () => {
      return (
            <div className='flex flex-row items-center justify-between w-full min-h-125px px-8 py-12 bg-white rounded-lg'>
                  <div className='flex flex-col flex-1 max-w-xl pl-12'>
                        <HeroTitleText />
                        <div className='mt-5'>
                              <HeroMainText />
                        </div>
                        <div className='mt-10'>
                              <PrincipalButton text='HIRE ME' />
                        </div>
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

export default index