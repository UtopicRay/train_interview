import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import Image from 'next/image'

function RobotSection() {
  return (
    <section className="card-cta">
      <div className="flex flex-col gap-6 max-w-lg">
        <h2>Get Interview-Ready with AI-Powered Practice & Feedback</h2>
        <p className="text-lg">
          Practice on real interview question & get instant feedback
        </p>
        <Button asChild className="btn-primary max-sm:w-full">
          <Link href="/">Start Interview</Link>
        </Button>
      </div>
      <Image src="/robot.png" alt="robot-image" className="max-sm:hidden" width={400} height={400}></Image>
    </section>
  )
}

export default RobotSection