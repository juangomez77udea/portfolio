import React from 'react'
import { IconType } from 'react-icons'
import { Icon as IconifyIcon } from '@iconify/react'

type IconSize = 15 | 20 | 24 | 32 | 48 | 68

interface BaseIconProps {
      size?: IconSize
      color?: string
      className?: string
}

interface ReactIconProps extends BaseIconProps {
      library: 'react-icons'
      icon: IconType
}

interface IconifyProps extends BaseIconProps {
      library: 'iconify'
      icon: string
}

type IconProps = ReactIconProps | IconifyProps

const index = ({ size = 24, color, className, ...props }: IconProps) => {
      if (props.library === 'react-icons') {
            const Icon = props.icon
            return <Icon size={size} color={color} className={className} />
      }

      return (
            <IconifyIcon
                  icon={props.icon}
                  width={size}
                  height={size}
                  color={color}
                  className={className}
            />
      )
}

export default index