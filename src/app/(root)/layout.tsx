import Navbar from "@/components/Navbar"
import { ReactNode } from "react"


function Layout({children}:{children:ReactNode}) {
  return (
    <div className="root-layout">
        <Navbar/>
        {children}
    </div>
  )
}

export default Layout