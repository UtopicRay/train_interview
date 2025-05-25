import InterviewCard from "@/components/InterviewCard";
import RobotSection from "@/components/sections/RobotSection";
import { dummyInterviews } from "@/constants";



export default function Home() {
  return (
    <div className="dark">
      <RobotSection/>
      <section className="flex flex-col gap-6 mt-8">
        <h2>Yours Interviews</h2>
        <div className="interviews-section">
          {dummyInterviews.map(({role,techstack,id,type,userId,createdAt}:Interview)=>(
           <InterviewCard role={role} techstack={techstack} type={type} createdAt={createdAt} interviewId={id} userId={userId} key={id}/> 
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-6 mt-8">
        <h2>Take an Interview</h2>
        <div className="interviews-section">
          {dummyInterviews.map(({role,techstack,id,type,userId,createdAt}:Interview)=>(
           <InterviewCard role={role} techstack={techstack} type={type} createdAt={createdAt} interviewId={id} userId={userId} key={id}/> 
          ))}
        </div>
      </section>
    </div>
    );
}
