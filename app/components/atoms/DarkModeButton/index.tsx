"use client"

import React from 'react'
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md'

interface DarkModeButtonProps {
      isDark: boolean
      onToggle: () => void
}

const DarkModeButton = ({ isDark, onToggle }: DarkModeButtonProps) => {
      return (
            <button
                  onClick={onToggle}
                  aria-label={isDark ? 'Activar modo claro' : 'Activar modo oscuro'}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white hover:bg-tertiary transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 hover:cursor-pointer"
            >
                  {isDark
                        ? <MdOutlineLightMode size={20} />
                        : <MdOutlineDarkMode size={20} />
                  }
            </button>
      )
}

export default DarkModeButton