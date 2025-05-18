import React from 'react'
import dayjs from 'dayjs'
import Image from 'next/image'
import { getRandomInterviewCover } from '@/lib/utils'
import { Button } from './ui/button'
import Link from 'next/link'
import DisplayTechsIcons from './DisplayTechsIcons'

function InterviewCard({role,techstack,type,createdAt,interviewId,userId}:InterviewCardProps) {
 const feedback= null as Feedback|null
 const normalizeType= /mix/gi.test(type)?'Mixed':type
 const formattedDate= dayjs(feedback?.createdAt||createdAt||Date.now()).format('MMM D,YYY')
    return (
    <div className='card-border w-[360px] max-sm:w-full min-h-96 '>
      <div className='card-interview'>
        <div>
          <div className='absolute top-0 right-0 rounded-bl-lg px-4 py-2 bg-light-600'>
            <p className="bagde-text">{normalizeType}</p>
        </div>
        <Image src={getRandomInterviewCover()} alt={`cover-${interviewId}`} height={90} width={90} className='rounded-full size-[90px] object-fit' />
          <div className='capitalize mt-5'>
            <h3>{role} Interview</h3>
          </div>
          <div className='flex flex-row gap-5 mt-3'>
            <div className='flex flex-row gap-2'>
              <Image src="/calendar.svg" alt='logo-date' width={22} height={22}/>
              <p>{formattedDate}</p>
            </div>
            <div className='flex flex-row gap-2 items-center'>
              <Image src='./star.svg' alt='logo-star' width={22} height={22}/>
              <p>{feedback?.totalScore||'---'}/100</p>
            </div>
          </div>
          <p className='mt-5 line-clamp-2'>
              {feedback?.finalAssessment||
              "You have not taken the interview yet. Take it now and improve your skills"
              }
          </p>
          <div className='flex flex-row justify-between mt-5'>
            <DisplayTechsIcons techStack={techstack}/>
            <Button>
              <Link href={feedback
              ?`/interview/${feedback.interviewId}/`
            :`/interview/${interviewId}`}>{
                feedback? "Check Feedback":"View Interview"
              }
              </Link>
            </Button>
          </div>
       </div>
      </div>
    </div>
  )
}

export default InterviewCard