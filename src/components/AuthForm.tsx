"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form
} from "@/components/ui/form"
import Image from "next/image"
import Link from "next/link"
import { toast } from "sonner"
import FormField from "./FormField"
import { useRouter } from "next/navigation"
import { auth } from "@/firebase/client"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { signIn,singUp } from "@/lib/actions/auth.actions"


const authSchema=(type:FormType)=>{
  return z.object({
    name: type==='sign-in'?z.string().optional():z.string().min(3),
    email:z.string().email(),
    password: z.string().min(4)
  })
}

export default function AuthForm({type}:{type:FormType}) {

  const router=useRouter()
  const formSchema =authSchema(type);
  // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        name: "",
        email:"",
        password: ""
      },
    })
   
    // 2. Define a submit handler.
   async function onSubmit(values: z.infer<typeof formSchema>) {
    try{
      if(type==='sign-in'){
        const {email,password}=values
        const isAuth=await signInWithEmailAndPassword(auth,email,password)
        const idToken=await isAuth.user.getIdToken()
        if(!idToken){
         return toast.error('Failed to sign in')
        }
        await signIn({email,idToken})
        toast.success('Sign in successfully')
        router.push('/')
      }
      if(type==='sign-up'){
        const {name,email,password}=values
        const isAuth=await createUserWithEmailAndPassword(auth,email,password)
        const idToken=await isAuth.user.getIdToken()
        if(!idToken){
          return toast.error('Failed to sign up')
        }
        const results=await singUp({uid:isAuth.user.uid,
          name: name!,
          email,
        password})
        if(!results.success){
          return toast.error(results.error)
        }
        toast.success('Account created successfully. Please sign in')
        router.push('/sign-in')
      }
    }catch(error){
      console.log(error)
      toast.error(`There was an error: ${error}`)
    }
    }

    const isSignIn=()=>type==='sign-in'
  return (
    <div className="card-border lg:min-w-[566px]">
      <div className="flex flex-col gap-6 py-14 px-10">
        <div className="flex flex-row gap-2 justify-center">
          <Image src="/logo.svg" alt="logo" height={32} width={38}></Image>
          <h2 className="text-primary-100">TrainInterview</h2>
        </div>
        <h3>Practice job interview with AI</h3>
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full mt-4 form">
      {!isSignIn()&&(
        <FormField control={form.control} label="Name" name='name' placeholder="Your name"/>
      )}
      <FormField control={form.control} label="Email" name="email" placeholder="Enter your email" type="email"/>
      <FormField control={form.control} label="Password" name="password" placeholder="Enter your password" type="password"></FormField>
        <Button className="btn" type="submit">{isSignIn()?'Sign In': "Create an Account"}</Button>
      </form>
    </Form>
    <p className="text-center">
      {isSignIn()?"No account yet?": "Have an account already?"}
      <Link href={!isSignIn()?'/sign-in':'sign-up'} className="font-bold ml-1 text-user-primary underline-offset-1">
      {!isSignIn()?"Sign In": "Sign Up"}
      </Link>
    </p>
      </div>
    </div>
  )
}
