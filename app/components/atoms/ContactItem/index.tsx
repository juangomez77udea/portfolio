import React from 'react'
import { IconType } from 'react-icons'

interface ContactItemProps {
      icon: IconType
      label: string
      value: string
      href?: string
}

const ContactItem = ({ icon: Icon, label, value, href }: ContactItemProps) => {
      return (
            <div className="flex items-center gap-4 p-3 rounded-xl bg-gray-50 dark:bg-[#1e2a3a] border border-gray-100 dark:border-gray-700 hover:border-primary dark:hover:border-primary transition-all duration-200 group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary flex-shrink-0">
                        <Icon size={18} />
                  </div>
                  <div className="flex flex-col min-w-0">
                        <span className="text-[11px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                              {label}
                        </span>
                        {href ? (
                              <a
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm font-medium text-gray-800 dark:text-gray-100 hover:text-primary dark:hover:text-primary transition-colors duration-150 truncate"
                              >
                                    {value}
                              </a>
                        ) : (
                              <span className="text-sm font-medium text-gray-800 dark:text-gray-100 truncate">
                                    {value}
                              </span>
                        )}
                  </div>
            </div>
      )
}

export default ContactItem