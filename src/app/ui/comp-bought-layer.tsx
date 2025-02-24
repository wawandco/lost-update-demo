import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

export default function BoughtLayer({
  watermelonsToBuy
}: {
  watermelonsToBuy: number
}) {
  return (
    <>
      <div className={`absolute w-[450px] h-[400px] -bottom-10 -right-35 `}>
        <div className="absolute top-[8%] left-[49%] z-10">
          <ShoppingBagIcon className="w-7 h-7 fill-white" />
        </div>
        <div className="absolute left-[55%] top-[12%] z-10">
          <div className="flex justify-center items-center gap-1">
            <span className="font-bold text-2xl">{watermelonsToBuy}</span>
            <Image src={'/wmelon.svg'} alt="" width={30} height={30}></Image>
          </div>
        </div>
        <div className="absolute left-[50%] top-[8%]">
          <Image
            src={`/bubble.svg`}
            alt=""
            width={85}
            height={20}
            className=""
          ></Image>
        </div>
      </div>
    </>
  )
}
