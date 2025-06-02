import Image from "next/image"
import Link from "next/link"
import { TreesIcon as Plant, Clock, Users, Trophy } from "lucide-react"
import { link } from "fs"

export default function Hero() {
  return (
  <div>
    <link  href="/login" /> 
    <button>Login</button>


    <Link href="/register">
  <button>Register</button>
</Link>
  </div>


  
  )
  }