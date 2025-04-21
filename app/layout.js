 
import Header from "@/app/component/header/Header";
import "./globals.css";
import './App.css'
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "next-themes";
 
 


export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en" suppressHydrationWarning >
      <body className="w-full relativ ">
      <ThemeProvider> 
      <Header/>
      <div className=" pt-[150px] w-full relative  h-screen flex items-center   ">
      
      <div className=" w-[70%] h-screen bg-yello-200 "> 
      {children}
      </div>
      <div className="w-[30%]  sticky right-[20px] top-0  h-screen bg-red-500 ">
          aside
        </div>

      </div>
      </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
