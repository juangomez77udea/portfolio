import React from 'react'

interface MiniContainerProps {
      title?: string
      size?: 'sm' | 'lg'
      children: React.ReactNode
      className?: string
}

const index = ({
      title,
      size = 'lg',
      children,
      className = '',
}: MiniContainerProps) => {
      return (
            <div
                  className={`flex flex-col gap-3 py-5 px-4  bg-white  ${size === 'lg' ? 'w-77.5' : 'w-55'} ${className}`}
            >
                  {title && (
                        <h3 className="text-base font-semibold text-gray-800 border-b border-gray-100 pb-2">
                              {title}
                        </h3>
                  )}
                  {children}
            </div>
      )
}

export default index