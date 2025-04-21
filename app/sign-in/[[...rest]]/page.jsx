
import { SignIn } from '@clerk/nextjs'
 export default function signinPage (){
    return(
      <div className="w-full flex items-center justify-center bg-red-800 ">
      <SignIn />
   
    </div>
    )
 }