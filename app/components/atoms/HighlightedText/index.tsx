import React from 'react'

interface HighlightedTextProps {
      text: string,
      color: string,
      background: string
}

const index = ({ text, color, background }: HighlightedTextProps) => {
      return (
            <div style={{ color: color, backgroundColor: background }} className='px-2 py-1 text-[13px]'>
                  {text}
            </div>
      )
}

export default index