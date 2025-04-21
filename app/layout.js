 
import Header from "@/app/component/header/Header";
import "./globals.css";
import './App.css'
import { ClerkProvider } from "@clerk/nextjs";
 
 


export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en"  >
      <body className="w-full relative">
      
      <Header/>
      <div className=" pt-[150px] w-full relative  h-screen flex items-center   ">
      
      <div className=" w-[70%] h-screen bg-yello-200 "> 
      {children}
      </div>
      <div className="w-[30%]  sticky right-[20px] top-0  h-screen bg-red-500 ">
          aside
        </div>

      </div>
     
      </body>
    </html>
    </ClerkProvider>
  );
}
