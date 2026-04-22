import React from 'react'
import Hero from '@/app/components/molecules/Hero';

const ContentCenter = () => {
      return (
            <div className='flex flex-col w-full h-full'>

                  {/* Section 1 */}
                  <section className='w-full p-4'>
                        <Hero />
                  </section>

                  {/* Section 2 */}
                  <section className='w-full'>
                  </section>

                  {/* Section 3 */}
                  <section className='w-full'>
                  </section>

                  {/* Section 4 */}
                  <section className='w-full'>
                  </section>

            </div>
      )
}

export default ContentCenter