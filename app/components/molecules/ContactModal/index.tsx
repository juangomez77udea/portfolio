'use client'

import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { MdClose, MdPhone, MdEmail, MdLocationOn, MdWork } from 'react-icons/md'
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import ContactItem from '@/app/components/atoms/ContactItem'

interface ContactModalProps {
      isOpen: boolean
      onClose: () => void
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {

      // Cierra con ESC
      useEffect(() => {
            const handleKey = (e: KeyboardEvent) => {
                  if (e.key === 'Escape') onClose()
            }
            if (isOpen) document.addEventListener('keydown', handleKey)
            return () => document.removeEventListener('keydown', handleKey)
      }, [isOpen, onClose])

      // Bloquea scroll del body
      useEffect(() => {
            document.body.style.overflow = isOpen ? 'hidden' : ''
            return () => { document.body.style.overflow = '' }
      }, [isOpen])

      if (!isOpen) return null

      const modal = (
            <div
                  className="fixed inset-0 z-50 flex items-center justify-center p-4"
                  role="dialog"
                  aria-modal="true"
                  aria-label="Contacto"
            >
                  {/* Backdrop */}
                  <div
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={onClose}
                  />

                  {/* Panel */}
                  <div className="relative z-10 w-full max-w-md bg-white dark:bg-secondary rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 overflow-hidden animate-[fadeInScale_0.2s_ease-out]">

                        {/* Header */}
                        <div className="relative px-6 pt-6 pb-4 border-b border-gray-100 dark:border-gray-700">
                              <div className="flex items-center gap-3">
                                    <div className="w-2 h-8 rounded-full bg-primary" />
                                    <div>
                                          <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                                                Hire Me
                                          </h2>
                                          <p className="text-xs text-gray-400 dark:text-gray-500">
                                                Juan Carlos Gómez Jaramillo · Systems Engineer
                                          </p>
                                    </div>
                              </div>
                              <button
                                    onClick={onClose}
                                    className="absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-700 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-150"
                                    aria-label="Cerrar"
                              >
                                    <MdClose size={18} />
                              </button>
                        </div>

                        {/* Contact items */}
                        <div className="flex flex-col gap-3 p-6">
                              <ContactItem
                                    icon={MdPhone}
                                    label="Teléfono"
                                    value="+57 301 296 03 89"
                                    href="tel:+57 3012960389"
                              />
                              <ContactItem
                                    icon={FaWhatsapp}
                                    label="WhatsApp"
                                    value="+57 301 296 03 89"
                                    href="https://wa.me/573012960389"
                              />
                              <ContactItem
                                    icon={MdEmail}
                                    label="Correo electrónico"
                                    value="juangomez88@gmail.com"
                                    href="mailto:juangomez88@gmail.com"
                              />
                              <ContactItem
                                    icon={FaLinkedinIn}
                                    label="LinkedIn"
                                    value="Juan Carlos Gómez Jaramillo"
                                    href="https://www.linkedin.com/in/juan-carlos-g%C3%B3mez-jaramillo-975658173/"
                              />
                              <ContactItem
                                    icon={FaGithub}
                                    label="GitHub"
                                    value="https://github.com/juangomez77udea"
                                    href="https://github.com/juangomez77udea"
                              />
                              <ContactItem
                                    icon={MdLocationOn}
                                    label="Ubicación"
                                    value="Bello, Antioquia · Colombia"
                              />
                              <ContactItem
                                    icon={MdWork}
                                    label="Disponibilidad"
                                    value="Freelance — Disponible ahora"
                              />
                        </div>

                        {/* Footer */}
                        <div className="px-6 pb-6">
                              <a
                                    href="mailto:juangomez88@gmail.com"
                                    className="flex items-center justify-center w-full py-3 rounded-xl bg-primary hover:bg-primary/90 text-white font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30"
                              >
                                    Enviar mensaje
                              </a>
                        </div>
                  </div>
            </div>
      )

      return createPortal(modal, document.body)
}

export default ContactModal