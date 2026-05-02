"use client"

import React, { useEffect, useLayoutEffect, useState } from 'react'
import DarkModeButton from '@/app/components/atoms/DarkModeButton'

const ThemeToggle = () => {
      const [isDark, setIsDark] = useState(() => {
            if (typeof window === 'undefined') return false
            const saved = localStorage.getItem('theme')
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
            return saved === 'dark' || (!saved && prefersDark)
      })
      const [mounted, setMounted] = useState(false)

      useEffect(() => {
            document.documentElement.classList.toggle('dark', isDark)
      }, [isDark])

      useEffect(() => {
            const frame = window.requestAnimationFrame(() => {
                  setMounted(true)
            })
            return () => window.cancelAnimationFrame(frame)
      }, [])

      const handleToggle = () => {
            const next = !isDark
            setIsDark(next)
            document.documentElement.classList.toggle('dark', next)
            localStorage.setItem('theme', next ? 'dark' : 'light')
      }

      // Evita hydration mismatch: no renderiza hasta que el cliente esté listo
      if (!mounted) return (
            <div className="flex items-center justify-center w-full py-2">
                  <div className="w-10 h-10 rounded-full bg-primary opacity-50" />
            </div>
      )

      return (
            <div className="flex items-center justify-center w-full py-2">
                  <DarkModeButton isDark={isDark} onToggle={handleToggle} />
            </div>
      )
}

export default ThemeToggle