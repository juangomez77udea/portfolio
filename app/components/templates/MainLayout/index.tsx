import React from 'react'

interface MainLayoutProps {
      left: React.ReactNode
      center: React.ReactNode
      right: React.ReactNode
}

const index = ({ left, center, right }: MainLayoutProps) => {
      return (
            <div className="flex h-screen w-full overflow-hidden">

                  <aside className="w-[305px] h-screen shrink-0 overflow-y-auto">
                        {left}
                  </aside>

                  <main className="flex-1 h-screen overflow-y-auto">
                        {center}
                  </main>

                  <aside className="w-[95px] h-screen shrink-0 overflow-y-auto">
                        {right}
                  </aside>

            </div>
      )
}

export default index