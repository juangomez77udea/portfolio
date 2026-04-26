import React from 'react'
import Hero from '@/app/components/molecules/Hero';
import TitleContentCenter from '@/app/components/atoms/TitleContentCenter'
import KnowledgeGrid from '@/app/components/molecules/KnowledgeGrid';
import Degress from '@/app/components/molecules/Degrees';

const ContentCenter = () => {
      return (
            <div className='flex flex-col w-full h-full px-10'>

                  {/* Section 1 */}
                  <section className='w-full'>
                        <Hero />
                  </section>

                  {/* Section 2 */}
                  <section className='w-full'>
                        <TitleContentCenter
                              title='My Knowledge'
                              description='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                        />
                        <KnowledgeGrid />
                  </section>

                  {/* Section 3 */}
                  <section className='w-full'>
                        <TitleContentCenter
                              title='Education'
                              description='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                        />
                        <Degress />
                  </section>

                  {/* Section 4 */}
                  <section className='w-full'>
                  </section>

                  <section className=' w-full'>
                        footer
                  </section>

            </div>
      )
}

export default ContentCenter