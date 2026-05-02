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
            description: '9th semester student of Systems Engineering at the University of Antioquia.',
      },
      {
            id: 2,
            institution: 'Programming Course',
            role: 'Student',
            date: 'Ene 2021 - Dic 2022',
            certificate: 'Diploma in Front End Web Programming - Online, Diploma in Backend Web Programming - Online, Diploma in Algorithms - LPOO - Virtual',
            description: 'Comfenalco Virtual Triple Diploma Program.',
      },
      {
            id: 3,
            institution: 'Zootecnia',
            role: 'Graduado',
            date: 'Jun 2001 - Dic 2008',
            certificate: 'Zootecnista',
            description: 'I am a professional graduate of the animal science program at the University of Antioquia.',
      },
]

const index = () => {
      return (
            <div className='flex flex-col w-full bg-white dark:bg-secondary transition-colors duration-300 p-10 px-30'>
                  {degrees.map((degree) => (
                        <div key={degree.id}
                              className='grid grid-cols-2 gap-8 py-6 border-b border-gray-200 dark:border-gray-700'
                        >
                              {/* Columna izquierda */}
                              <div className='flex flex-col gap-3'>
                                    <TitleDegree text={degree.institution} />
                                    <div className='flex items-center gap-3'>
                                          <span className='text-[15px] text-gray-500 dark:text-gray-400'>{degree.role}</span>
                                          <HighlightedText text={degree.date} color='#fff' background='#FFB400' />
                                    </div>
                              </div>

                              {/* Columna derecha */}
                              <div className='flex flex-col gap-3'>
                                    <TitleDegree text={degree.certificate} />
                                    <p className='text-[15px] text-gray-400 dark:text-gray-500'>{degree.description}</p>
                              </div>
                        </div>
                  ))}
            </div>
      )
}

export default index