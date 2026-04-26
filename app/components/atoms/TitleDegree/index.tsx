import React from 'react'

interface TitleProps {
      text: string
}

const index = ({ text }: TitleProps) => {
      return (
            <div className=' text-[18px]'>{text}</div>
      )
}

export default index