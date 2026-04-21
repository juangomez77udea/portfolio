import React from 'react'
import { Icon } from '@iconify/react'

interface ButtonProps {
      text: string;
}

const index = ({ text }: ButtonProps) => {
      return (
            <button
                  className=' bg-primary font-medium py-2 px-8 rounded-md h-13 hover:cursor-pointer hover:bg-tertiary transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-white flex items-center flex-row gap-2'
            >
                  {text}
                  <Icon icon="mdi:arrow-right" width={16} height={16} />
            </button>
      )
}

export default index