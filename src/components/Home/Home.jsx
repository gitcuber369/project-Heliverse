import React from 'react'
import FluidCanvas from '../FluidCanvas'

function Home() {
  return (
    <div>
    <header className="dark:bg-background sticky top-0 z-40 w-full border-b-[1px] bg-red-500 dark:border-b-slate-700">
      <div>
        hi there 
      </div>
    </header>
    <FluidCanvas>
        <div className="">
          <h1 className="text-orange-500 text-4xl font-bold">Your Text Here</h1>
        </div>
    </FluidCanvas>
    </div>
  )
}

export default Home