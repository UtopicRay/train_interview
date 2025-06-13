'use server'

import { auth, db } from "@/firebase/admin"
import { cookies } from "next/headers"

const ONE_HOUR=60*60

export async function singUp({uid,email,name}:SignUpParams){
    try{
        const getUser=await db.collection('users').doc(uid).get()
        if(getUser.exists){
            return {
                success:false,
                error:'User already exists'
            }
        }
        await db.collection('users').doc(uid).set({
            email,
            name,
            createdAt:new Date()
        })
        return {
         succes: true,
         message: 'User created successfully'    
    }
}
    catch(error:any){
        console.error(error.message)
        if(error.code==='auth/email-already-in-use'){
            return {
                success:false,
                error:'Email already in use'
            }
        }
        return {
            success:false,
            error:'Failed to sign up'
        }        
    }
}
async function setSessionCookie(idToken:string){
    const cookiesStore= await cookies()
    const expiresAt=Date.now()+ONE_HOUR*1000
    
    const sessionCookie=await auth.createSessionCookie(idToken,{
        expiresIn:expiresAt
    })
    cookiesStore.set('idToken',idToken,{
        httpOnly:true,
        secure:process.env.NODE_ENV==='production',
        maxAge:ONE_HOUR,
        path:'/',
        sameSite:'lax'
    })
}
export async function signIn({email,idToken}:SignInParams){
    try{
       const user= await auth.getUserByEmail(email)
       if(!user){
        return {
            success:false,
            error:'User not found'
        }
       }
       const sessionCookie=await setSessionCookie(idToken)
       return {
        success:true,
        message:'Sign in successfully',
        sessionCookie
       }
    }
    catch(error:any){
        console.error(error.message)
        return {
            success:false,
            error:'Failed to sign in'
        }
    }
}  
export async function getCurrentUser():Promise<User|null>{
    const cookiesStore=await cookies();
    const sessionCookie=cookiesStore.get('session')?.value
    if(!sessionCookie){
        return null
    }
    const currentUser=await db.collection('users').doc(sessionCookie.uid).get()

} 