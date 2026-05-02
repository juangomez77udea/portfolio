import React from 'react'
import Image from 'next/image'
import MiniContainer from '@/app/components/molecules/MiniContainer';
import SkillBar from '@/app/components/atoms/SkillBar';
import DynamicIcon from '@/app/components/atoms/icons'
import { FaRegClone } from 'react-icons/fa'

const index = () => {
      return (
            <div className='bg-background dark:bg-secondary transition-colors duration-300'>
                  <MiniContainer size="sm" className="items-center text-center border-b border-gray-200 dark:border-gray-700 m-auto">
                        <div
                              className="relative mx-auto mt-12"
                              style={{ width: '150px', height: '150px' }}
                        >
                              <Image
                                    src="/avatar.png"
                                    alt="Juan Carlos Gómez Jaramillo"
                                    className="rounded-full object-cover"
                                    fill
                              />
                              <span className="absolute bottom-6 right-1 w-4 h-4 bg-tertiary rounded-full border-2 border-white dark:border-secondary" />
                        </div>
                        <div className="m-auto p-7">
                              <p className="font-semibold text-gray-800 dark:text-white">Juan Carlos Gómez Jaramillo</p>
                              <p className="text-sm text-gray-400 dark:text-gray-400">Front-End Developer</p>
                        </div>
                  </MiniContainer>

                  <div>
                        <MiniContainer size="sm" className="mt-5 border-b border-gray-200 dark:border-gray-700 m-auto">
                              {[
                                    { label: 'Age', value: '46' },
                                    { label: 'Residence', value: 'CO' },
                                    { label: 'Freelance', value: 'Available', highlight: true },
                                    { label: 'Address', value: 'Bello, Antioquia' },
                              ].map(({ label, value, highlight }) => (
                                    <div key={label} className="flex justify-between items-center text-sm">
                                          <span className="text-gray-400">{label}:</span>
                                          <span className={highlight ? 'text-green-500 font-medium' : 'text-gray-700 dark:text-gray-300'}>
                                                {value}
                                          </span>
                                    </div>
                              ))}
                        </MiniContainer>
                  </div>

                  <div>
                        <MiniContainer size="sm" className="mt-5 border-b border-gray-200 dark:border-gray-700 m-auto" title="Languages">
                              <SkillBar language="Español" percentage={100} />
                              <SkillBar language="English" percentage={45} />
                        </MiniContainer>
                  </div>

                  <div>
                        <MiniContainer size="sm" className="mt-5 border-b border-gray-200 dark:border-gray-700 m-auto" title="Programming-languages">
                              <SkillBar language="HTML" percentage={75} />
                              <SkillBar language="CSS" percentage={75} />
                              <SkillBar language="JavaScript" percentage={60} />
                              <SkillBar language="Java" percentage={60} />
                              <SkillBar language="Python" percentage={60} />
                              <SkillBar language="Kotlin" percentage={35} />
                        </MiniContainer>
                  </div>

                  <div>
                        <MiniContainer
                              title="Extra Skills"
                              size="sm"
                              className="mt-5 border-b border-gray-200 dark:border-gray-700 m-auto">
                              {[
                                    'Bootstrap, Tailwind CSS',
                                    'Module federation, Docker',
                                    'JetPack Compose',
                                    'GIT Knowledge',
                              ].map((skill) => (
                                    <div key={skill} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                                          <DynamicIcon library="react-icons" icon={FaRegClone} size={15} className="text-primary" />
                                          <span>{skill}</span>
                                    </div>
                              ))}
                        </MiniContainer>
                  </div>
            </div>
      )
}

export default index