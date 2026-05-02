'use client'

import React, { useState } from 'react'
import { MdMenu } from 'react-icons/md'

interface MainLayoutProps {
      left: React.ReactNode
      center: React.ReactNode
      right: React.ReactNode
}

const MainLayout = ({ left, center, right }: MainLayoutProps) => {
      const [menuOpen, setMenuOpen] = useState(false)

      return (
            <div className="flex h-screen w-full overflow-hidden">

                  {menuOpen && (
                        <button
                              type="button"
                              className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm md:hidden"
                              onClick={() => setMenuOpen(false)}
                              onKeyDown={(event) => {
                                    if (event.key === 'Escape') {
                                          setMenuOpen(false)
                                    }
                              }}
                              aria-label="Cerrar menú"
                        />
                  )}
                  <aside className={`
                        fixed top-0 left-0 z-40 h-screen overflow-y-auto
                        transition-transform duration-300 ease-in-out
                        bg-background dark:bg-secondary w-72
                        ${menuOpen ? 'translate-x-0' : '-translate-x-full'}
                        md:relative md:translate-x-0 md:w-76.25px md:shrink-0 md:z-auto
                  `}>
                        {left}
                  </aside>

                  <main className="flex-1 h-screen overflow-y-auto">
                        <div className="flex items-center justify-between px-4 py-3 bg-background dark:bg-secondary border-b border-gray-200 dark:border-gray-700 md:hidden">
                              <button
                                    onClick={() => setMenuOpen(true)}
                                    className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                    aria-label="Abrir menú"
                              >
                                    <MdMenu size={22} />
                              </button>
                              <span className="font-bold text-sm text-gray-800 dark:text-white">Juan Carlos Gómez</span>
                              <div className="w-9" />
                        </div>
                        {center}
                  </main>

                  <aside className="w-24 h-screen shrink-0 bg-red-500 max-md:hidden">
                        {right}
                  </aside>

            </div>
      )
}

export default MainLayout