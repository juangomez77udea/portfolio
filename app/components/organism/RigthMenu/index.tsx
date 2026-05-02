'use client'

import React, { useState } from 'react'
import { MdMenu, MdClose } from 'react-icons/md'
import CircleButton from '@/app/components/atoms/Buttons/CircleButton'
import ThemeToggle from '../../molecules/ThemeToggle'

const Index = () => {
      const [open, setOpen] = useState(false)

      return (
            <>
                  <div className="flex flex-col h-full bg-white dark:bg-secondary transition-colors duration-300">
                        <div className="flex flex-col items-center justify-start gap-3 pt-4 flex-1">
                              <h1 className="font-extrabold text-lg mb-6 text-foreground dark:text-white">Links</h1>
                              <CircleButton social="facebook" href="https://www.facebook.com/juan.c.gomez.7140" />
                              <CircleButton social="instagram" href="https://www.instagram.com/juangomez6906/" />
                              <CircleButton social="twitter" href="https://x.com/JuanJuangomez88" />
                              <CircleButton social="linkedin" href="https://www.linkedin.com/in/juan-carlos-g%C3%B3mez-jaramillo-975658173/" />
                              <CircleButton social="youtube" href="https://www.youtube.com/@juannuki" />
                        </div>
                        <div className="pb-4">
                              <ThemeToggle />
                        </div>
                  </div>
                  <div className="md:hidden">
                        <button
                              onClick={() => setOpen(true)}
                              className="fixed bottom-5 right-5 z-40 w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg hover:bg-tertiary transition-colors duration-200"
                              aria-label="Abrir links"
                        >
                              <MdMenu size={22} className="text-white" />
                        </button>

                        {open && (
                              <button
                                    type="button"
                                    className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
                                    onClick={() => setOpen(false)}
                                    aria-label="Cerrar menú"
                              />
                        )}

                        <div className={`
                              fixed top-0 right-0 z-50 h-full w-64
                              bg-white dark:bg-secondary shadow-2xl
                              transition-transform duration-300 ease-in-out flex flex-col
                              ${open ? 'translate-x-0' : 'translate-x-full'}
                        `}>
                              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 dark:border-gray-700">
                                    <h2 className="font-extrabold text-lg text-foreground dark:text-white">Links</h2>
                                    <button
                                          onClick={() => setOpen(false)}
                                          className="w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-700 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
                                          aria-label="Cerrar"
                                    >
                                          <MdClose size={18} />
                                    </button>
                              </div>
                              <div className="flex flex-col items-center gap-4 pt-8 flex-1">
                                    <CircleButton social="facebook" href="https://www.facebook.com/juan.c.gomez.7140" />
                                    <CircleButton social="instagram" href="https://www.instagram.com/juangomez6906/" />
                                    <CircleButton social="twitter" href="https://x.com/JuanJuangomez88" />
                                    <CircleButton social="linkedin" href="https://www.linkedin.com/in/juan-carlos-g%C3%B3mez-jaramillo-975658173/" />
                                    <CircleButton social="youtube" href="https://www.youtube.com/@juannuki" />
                              </div>
                              <div className="pb-6">
                                    <ThemeToggle />
                              </div>
                        </div>
                  </div>
            </>
      )
}

export default Index