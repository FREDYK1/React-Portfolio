import React from 'react'
import { abilities } from '../constants/index.js'
import TitleHeader from '../components/TitleHeader'
import HoverGlowCard from '../components/HoverGlowCard'

const FeatureCards = () => {
  return (
    <div className="w-full padding-x-lg md:mt-40 mt-20">
        <TitleHeader
            title="What I Bring"
            sub="💡 Core Strengths"
        />
        <div className="mx-auto grid-3-cols mt-16">
            {abilities.map(({title, description, icon}) => (
              <HoverGlowCard key={title} className="rounded-xl p-8 flex flex-col gap-4">
                <div className="size-14 flex items-center justify-center rounded-full">
                  <img src={icon} alt="" />
                </div>
                <h3 className="text-white text-2xl font-semibold mt-2">{title}</h3>
                <p className="text-white-50 text-lg">{description}</p>
              </HoverGlowCard>
            ))}
        </div>
    </div>
  )
}

export default FeatureCards