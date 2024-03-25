"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function Navigation() {

    const router = useRouter();

    const handelclick = () => {
    router.replace('/')
    }
  return (
    <div>
      <Link href={'/'} prefetch = {false}>click here </Link>
      <button onClick={handelclick}> Click me </button>
    </div>
  )
}
