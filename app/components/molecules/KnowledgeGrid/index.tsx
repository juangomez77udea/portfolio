import React from 'react'
import { LiaLaptopCodeSolid, LiaPaletteSolid, LiaMicrophoneAltSolid, LiaGamepadSolid, LiaCameraSolid, LiaPhoneSolid } from 'react-icons/lia'
import MiniContainer from '@/app/components/molecules/MiniContainer'

const services = [
      {
            icon: <LiaLaptopCodeSolid />,
            title: 'Web Development',
            description: 'Blog, E-Commerce',
      },
      {
            icon: <LiaPaletteSolid />,
            title: 'UI/UX Design',
            description: 'Mobile App, Website Design',
      },
      {
            icon: <LiaMicrophoneAltSolid />,
            title: 'Sound Design',
            description: 'Voice Over, Beat Making',
      },
      {
            icon: <LiaGamepadSolid />,
            title: 'Game Design',
            description: 'Character Design, Props & Objects',
      },
      {
            icon: <LiaCameraSolid />,
            title: 'Photography',
            description: 'Portrait, Product Photography',
      },
      {
            icon: <LiaPhoneSolid />,
            title: 'Advertising',
            description: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.',
      },
]

const index = () => {
      return (
            <div className='grid grid-cols-3 gap-10 m-10 '>
                  {services.map((service, i) => (
                        <MiniContainer key={i} className='group items-center justify-center text-center w-full h-50 overflow-hidden hover:rounded-lg hover:bg-tertiary transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 hover:cursor-pointer'>
                              <span className='text-5xl text-primary group-hover:text-white transition duration-150'>{service.icon}</span>
                              <h3 className='font-bold text-base text-secondary group-hover:text-white transition duration-150'>{service.title}</h3>
                              <p className='text-[15px] text-gray-400 group-hover:text-white transition duration-150'>{service.description}</p>
                        </MiniContainer>
                  ))}
            </div>
      )
}

export default index