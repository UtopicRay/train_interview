import { cn, getTechLogos } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

async function DisplayTechsIcons({techStack}:TechIconProps) {
  const getIcons=await getTechLogos(techStack)
    return (
    <div className='flex flex-row'>
        {getIcons.slice(0,3).map((tech,index)=>(
            <div className={cn("relative group bg-dark-300 px-2 flex-center rounded-full",index>=1&&"-ml-3")} key={index}>
                <span className='tech-tooltip'>{tech.tech}</span>
                <Image src={tech.url} alt={tech.tech} width={100} height={100} className='size-5'/>
            </div>
        ))}
    </div>
  )
}

export default DisplayTechsIcons