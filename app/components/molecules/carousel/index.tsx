'use client'

import React, { useState, useRef, useEffect } from 'react'
import ProjectCard, { type Project } from '@/app/components/molecules/ProjectCard'

export type { Project }

interface CarouselProps {
      projects: Project[]
      title?: string
      className?: string
}

const CARD_WIDTH = 300
const GAP = 16

const Carousel = ({ projects, title, className = '' }: CarouselProps) => {
      const [currentIndex, setCurrentIndex] = useState(0)
      const [visibleCount, setVisibleCount] = useState(3)
      const wrapperRef = useRef<HTMLDivElement>(null)

      useEffect(() => {
            const updateVisible = () => {
                  if (wrapperRef.current) {
                        const width = wrapperRef.current.offsetWidth
                        const count = Math.max(1, Math.floor((width + GAP) / (CARD_WIDTH + GAP)))
                        setVisibleCount(count)
                  }
            }
            updateVisible()
            window.addEventListener('resize', updateVisible)
            return () => window.removeEventListener('resize', updateVisible)
      }, [])

      const maxIndex = Math.max(0, projects.length - visibleCount)
      const clampedIndex = Math.min(currentIndex, maxIndex)

      const goTo = (index: number) => {
            const clamped = Math.min(Math.max(index, 0), maxIndex)
            setCurrentIndex(clamped)
      }

      return (
            <div className={`w-full ${className}`} ref={wrapperRef}>

                  {title && (
                        <div className="flex items-center justify-between mb-4 px-1">
                              <h2 className="text-base font-bold text-gray-800 dark:text-white tracking-tight">
                                    {title}
                              </h2>
                              <div className="flex gap-1.5 items-center">
                                    {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                                          <button
                                                key={i}
                                                onClick={() => goTo(i)}
                                                className={`h-2 rounded-full transition-all duration-300 ${i === clampedIndex
                                                            ? 'w-5 bg-primary'
                                                            : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400'
                                                      }`}
                                                aria-label={`Ir al slide ${i + 1}`}
                                          />
                                    ))}
                              </div>
                        </div>
                  )}

                  <div className="relative overflow-hidden">
                        <div
                              className="flex transition-transform duration-400 ease-in-out"
                              style={{
                                    gap: `${GAP}px`,
                                    willChange: 'transform',
                                    transform: `translateX(-${clampedIndex * (CARD_WIDTH + GAP)}px)`,
                              }}
                        >
                              {projects.map((project) => (
                                    <ProjectCard key={project.id} project={project} />
                              ))}
                        </div>

                        {clampedIndex > 0 && (
                              <button
                                    onClick={() => goTo(clampedIndex - 1)}
                                    className="absolute left-0 top-1/2 -translate-y-1/2 translate-x-2 z-10 w-8 h-8 rounded-full bg-white dark:bg-secondary shadow-md border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-primary hover:text-white hover:border-primary transition-all duration-200"
                                    aria-label="Anterior"
                              >
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                          <path d="M9 11L5 7L9 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                              </button>
                        )}

                        {clampedIndex < maxIndex && (
                              <button
                                    onClick={() => goTo(clampedIndex + 1)}
                                    className="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-2 z-10 w-8 h-8 rounded-full bg-white dark:bg-secondary shadow-md border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-primary hover:text-white hover:border-primary transition-all duration-200"
                                    aria-label="Siguiente"
                              >
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                          <path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                              </button>
                        )}
                  </div>
            </div>
      )
}

export default Carousel