import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

enum CallStatus{
    INACTIVE='INACTIVE',
    CONNECTING='CONNECTING',
    ACTIVE='ACTIVE',
    FINISHED='FINISHED'
}
function Agent({userName,}:AgentProps) {
  const isSpeaking=true
  const callStatus=CallStatus.ACTIVE
  const menssa:string[]=[
    'How do feels today?',
    'My name is Trainy, how can i help you?'
  ]
  const lastMenssage=menssa[menssa.length-1]
    return (
        <>
         <div className='call-view'>
            <div className='card-interviewer'>
            <div className='avatar'>
                <Image src='/ai-avatar.png' alt='ai-logo' className='object-cover' width={65} height={65} ></Image>
                {isSpeaking&& <span className='animate-speak'/>}
            </div>
            <h3>AI Interviewer</h3>
        </div>
        <div className='card-border'>
            <div className='card-content'>
                <div className='avatar'>
                    <Image src='/user-avatar.png' alt='user-avatar' width={540} height={540} className='rounded-full object-cover size-[120px]'/>
                </div>
                <h3>{!userName&&'You'}</h3>
            </div>
        </div>
    </div>
    {menssa.length>0&&(
        <div className='transcript-border'>
        <div className='transcript'>
            <p className={cn('opacity-0 duration-500 transition-opacity','animate-fadeIn opacity-100')}>
                {lastMenssage}
            </p>
        </div>
    </div>
    )}
    
    <div className='flex justify-center w-full'>
            {callStatus!=='ACTIVE'?(
                <button className='btn-call relative'>
                    <span className={cn('absolute animate-ping rounded-full opacity-75', callStatus!=='CONNECTING'&&'hidden')}/>
                    <span>
                        {callStatus==='FINISHED'||callStatus==='INACTIVE'?'Call':'...'}
                    </span>
                </button>
            ):(
                <button className='btn-disconnect'>
                    End
                </button>
            )}
        </div>
     </>
  )
}

export default Agent