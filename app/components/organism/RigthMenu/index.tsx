import React from 'react'
import CircleButton from '@/app/components/atoms/Buttons/CircleButton'
import ThemeToggle from '../../molecules/ThemeToggle'

const index = () => {
      return (
            <div className="flex flex-col h-full bg-white dark:bg-secondary transition-colors duration-300">
                  
                  <div className="flex flex-col items-center justify-start gap-3 pt-4 flex-1">
                        <div>
                              <h1 className="font-extrabold text-lg mb-6 text-foreground dark:text-white">Links</h1>
                        </div>
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
      )
}

export default index