import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="w-full flex items-center sticky top-4 z-30">
          <div className="w-full bg-black/40 backdrop-blur-md border border-zinc-800 px-3 py-4 mt-2 rounded-xl flex justify-between items-center mx-5 md:mx-20">
            <h1 className="text-xl font-bold z-10 text-zinc-50">plantiFy.ai</h1>
            <div>
              <Link href={"/login"} className="text-zinc-950 bg-white rounded-full px-3 py-2 font-semibold">Login</Link>
            </div>
          </div>
        </nav>
  )
}

export default Navbar