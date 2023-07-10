import Image from 'next/image'
import { Github, Globe, Instagram, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import giphy from "../../public/giphy.gif"

export default function Home() {
  return (
    <div className='flex justify-center items-center py-12 px-1'>
      <div className='w-[300px] md:w-[400px] md:h-[450px] bg-black text-white text-center border-2 rounded-lg'>
        <h1 className='text-3xl font-bold mt-8 hover:text-gray-400 cursor-pointer'>Masab Bin Zia</h1>
        <Image src={giphy} alt="gif" className='w-[300px] h-[150px] rounded-lg mx-auto mt-2'></Image>
        <p className='mt-2 px-12'>
          👋 Hi there! I&apos;m Masab Bin Zia, a Junior Frontend Developer and Computer Science student passionate about creating beautiful and functional web applications.
        </p>
        <div className='flex flex-row justify-center items-center px-12 mt-8  space-x-2'>
          <Link href={"https://masab-mbz-portfolio.vercel.app"} className='text-white w-10 h-10 flex justify-center items-center rounded-full hover:text-sky-200'>
            <Globe />
          </Link>
          <Link href={"https://github.com/MasabBinZia"} className='text-white w-10 h-10 flex justify-center items-center rounded-full hover:text-sky-200'>
            <Github />
          </Link>
          <Link href={"https://instagram.com/masab_mbz/"} className='text-white w-10 h-10 flex justify-center items-center rounded-full hover:text-sky-200'>
            <Instagram />
          </Link>
          <Link href={"https://linkedin.com/in/masab-bin-zia-411a0922a"} className='text-white w-10 h-10 flex justify-center items-center rounded-full hover:text-sky-200'>
            <Linkedin />
          </Link>
          <Link href={"https://twitter.com/hadescreeping"} className='text-white w-10 h-10 flex justify-center items-center rounded-full hover:text-sky-200'>
            <Twitter />
          </Link>
        </div>
      </div>
    </div>
  )
}
