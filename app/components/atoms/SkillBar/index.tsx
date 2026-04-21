import React from 'react'

interface SkillBarProps {
      language: string
      percentage: number
}

const index = ({ language, percentage }: SkillBarProps) => {
      const clampedPercentage = Math.min(100, Math.max(0, percentage))

      return (
            <div className="flex flex-col gap-1 w-full">
                  <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{language}</span>
                        <span className="text-sm font-medium">{clampedPercentage}%</span>
                  </div>
                  <div className="w-full h-2 bg-transparent rounded-full border border-primary">
                        <div
                              className="h-2 bg-primary rounded-full"
                              style={{ width: `${clampedPercentage}%` }}
                        />
                  </div>
            </div>
      )
}

export default index