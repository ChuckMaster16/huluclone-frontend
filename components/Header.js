import {BadgeCheckIcon, CollectionIcon, HomeIcon, LightningBoltIcon,SearchIcon,UserIcon} from '@heroicons/react/outline'
import React from 'react'
import Image from 'next/image'
import HeaderItem from './HeaderItem'

function Header() {
  return (

    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
        <div className="flex flex-grow justify-evenly max-w-2xl">
            <HeaderItem title='HOME' Icon={HomeIcon} />
            <HeaderItem title='HOME' Icon={LightningBoltIcon} />
            <HeaderItem title='HOME' Icon={BadgeCheckIcon} />
            <HeaderItem title='HOME' Icon={CollectionIcon} />
            <HeaderItem title='HOME' Icon={SearchIcon} />
            <HeaderItem title='HOME' Icon={UserIcon} />
          </div>
      <Image
      className="object-contain"
      src="https://res.cloudinary.com/chuckmaster/image/upload/v1664791329/Hulu-clone/hulu-white_czlwzo.webp"
      width={200} height={200}/>

    </header>
  )
}

export default Header;
