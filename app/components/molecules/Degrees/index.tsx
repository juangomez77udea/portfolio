import React from 'react'
import TitleDegree from '@/app/components/atoms/TitleDegree'
import HighlightedText from '@/app/components/atoms/HighlightedText'

const degrees = [
      {
            id: 1,
            institution: 'Universidad de Antioquia',
            role: 'Student',
            date: 'Ene 2015 - Dic 2020',
            certificate: 'System Engineering',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
            id: 2,
            institution: 'Programming Course',
            role: 'Student',
            date: 'Ene 2021 - Dic 2022',
            certificate: 'Certificado de Desarrollo Web',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
            id: 3,
            institution: 'Zootecnia',
            role: 'Graduado',
            date: 'Ene 2023 - Dic 2024',
            certificate: 'Zootecnista',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
]

const index = () => {
      return (
            <div className='flex flex-col w-full bg-white p-10  px-30'>
                  {degrees.map((degree) => (
                        <div key={degree.id}
                              className='grid grid-cols-2 gap-8 py-6 border-b border-gray-200'
                        >
                              {/* Columna izquierda */}
                              <div className='flex flex-col gap-3'>
                                    <TitleDegree text={degree.institution} />
                                    <div className='flex items-center gap-3'>
                                          <span className='text-[15px] text-gray-500'>{degree.role}</span>
                                          <HighlightedText text={degree.date} color='#fff' background='#FFB400' />
                                    </div>
                              </div>

                              {/* Columna derecha */}
                              <div className='flex flex-col gap-3'>
                                    <TitleDegree text={degree.certificate} />
                                    <p className='text-[15px] text-gray-400'>{degree.description}</p>
                              </div>
                        </div>
                  ))}
            </div>
      )
}
export default index