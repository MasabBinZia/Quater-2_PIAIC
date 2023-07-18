import Image from 'next/image'

export default function Home() {
  return (
    // <main className='px-24 py-12 flex justify-center items-center'>
    //   <div className='grid grid-cols-2 w-[400px] h-[400px]'>
    //     <div className='bg-red-300'>1</div>
    //     <div className='bg-red-500'>2</div>
    //     <div className='bg-red-900'>3</div>
    //     <div className='bg-green-900'>4</div>
    //   </div>
    // </main>

    // <div className='grid grid-cols-[1fr,auto]'>
    //   <div className='bg-red-300'></div>
    //   <div className='bg-red-500 w-32 h-32'>
    //   </div>
    // </div>

     <div className='grid min-h-screen grid-rows-[auto,1fr,auto]'>
      <div className='bg-red-300'>Header</div>
      <div className='bg-red-500'>Main Content</div>
      <div className='bg-green-500'>Footer</div>
    </div>

  )
}
