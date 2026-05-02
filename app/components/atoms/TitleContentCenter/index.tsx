import React from 'react'

interface TitleContentCenterProps {
      title: string
      description?: string
}

const index = ({ title, description }: TitleContentCenterProps) => {
      return (
            <div>
                  <h1 className='p-6 m-6 font-bold text-4xl text-secondary dark:text-white text-center'>
                        {title}
                  </h1>
                  <div>
                        <p className='p-6 text-center text-secondary dark:text-gray-300 text-[15px]'>
                              {description}
                        </p>
                  </div>
            </div>
      )
}

export default index