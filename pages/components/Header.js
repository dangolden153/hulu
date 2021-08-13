import Image from 'next/image'
import HeaderItem from './HeaderItem'
import {
HomeIcon,
CollectionIcon,
BadgeCheckIcon,
UserIcon,
SearchIcon,
LightningBoltIcon
} from '@heroicons/react/outline'

// import pics from '../../pictures/'

function Header() {
    return (
        <header className="flex flex-col sm:flex-row m-5 items-center justify-between">
        <div className="flex flex-row justify-evenly max-w-2xl">
            <HeaderItem title="HOME" Icon={HomeIcon} />
           <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
           <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
           <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
           <HeaderItem title="SEARCH" Icon={SearchIcon}  />
           <HeaderItem title="ACCOUNT" Icon={UserIcon} />
        </div>

       
        <Image src="/mew.png" width={50} height={50} className="object-contain" />
        </header>
    )
}

export default Header
