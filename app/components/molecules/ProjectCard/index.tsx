'use client'

import React, { useState } from 'react'
import Image from 'next/image'

export interface Project {
      id: number
      title: string
      description: string
      imageUrl: string
      liveUrl?: string
      tags: string[]
}

interface ProjectCardProps {
      project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
      const [imgError, setImgError] = useState(false)

      return (
            <div className="flex flex-col w-75 shrink-0 rounded-2xl overflow-hidden bg-white dark:bg-[#1e2a3a] border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 group">

                  {/* Image */}
                  <div className="relative w-full h-44 overflow-hidden bg-linear-to-br from-indigo-50 to-slate-100 dark:from-[#1a2535] dark:to-[#1e2a3a]">
                        {imgError ? (
                              <div className="w-full h-full flex items-center justify-center">
                                    <span className="text-4xl opacity-20">🖼️</span>
                              </div>
                        ) : (
                              <Image
                                    src={project.imageUrl}
                                    alt={project.title}
                                    fill
                                    className="w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-105"
                                    onError={() => setImgError(true)}
                              />
                        )}

                        {/* Tags overlay */}
                        <div className="absolute bottom-0 left-0 right-0 px-3 py-2 flex gap-1.5 flex-wrap bg-linear-to-t from-black/40 to-transparent">
                              {project.tags.map((tag) => (
                                    <span
                                          key={tag}
                                          className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-tertiary/60 backdrop-blur-sm text-white border border-white/30 tracking-wide"
                                    >
                                          {tag}
                                    </span>
                              ))}
                        </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-2 p-4">
                        <h3 className="text-sm font-bold text-gray-900 dark:text-white leading-snug tracking-tight">
                              {project.title}
                        </h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2">
                              {project.description}
                        </p>

                        {project.liveUrl && (
                              <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-tertiary transition-colors duration-150 group/link"
                              >
                                    follow the link{' '}
                                    <span className="transition-transform duration-200 group-hover/link:translate-x-0.5">›</span>
                              </a>
                        )}
                  </div>
            </div>
      )
}

export default ProjectCard