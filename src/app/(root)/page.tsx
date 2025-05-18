import InterviewCard from "@/components/InterviewCard";
import RobotSection from "@/components/sections/RobotSection";
import { dummyInterviews } from "@/constants";



export default function Home() {
  return (
    <div className="dark">
      <RobotSection/>
      <section>
        <div className="">
          {dummyInterviews.map(({role,techstack,id,type,userId,createdAt}:Interview)=>(
           <InterviewCard role={role} techstack={techstack} type={type} createdAt={createdAt} interviewId={id} userId={userId} key={id}/> 
          ))}
        </div>
        
      </section>
    </div>
    );
}
