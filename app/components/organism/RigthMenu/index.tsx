import React from 'react'
import CircleButton from '@/app/components/atoms/Buttons/CircleButton'

const index = () => {
      return (
            <div className="flex flex-col items-center justify-start gap-3 pt-4 bg-white h-full w-full">
                  <div>
                        <h1 className="font-extrabold text-lg mb-6">Links</h1>
                  </div>
                  <CircleButton social="facebook" href="https://facebook.com" />
                  <CircleButton social="instagram" href="https://instagram.com" />
                  <CircleButton social="twitter" href="https://twitter.com" />
                  <CircleButton social="linkedin" href="https://linkedin.com" />
                  <CircleButton social="youtube" href="https://youtube.com" />
            </div>
      )
}

export default index