import Image from 'next/image'
import { JSX } from 'react'

import { Watermelon } from '@/app/lib/definitions'

export default function UserLayer({
  avatar,
  name,
  position,
  watermelons,
  state,
}: {
  avatar: string
  name: string
  position: string
  watermelons: Watermelon[]
  state: JSX.Element
}) {
  return (
    <>
      <div className={`absolute ${position}`}>
        {state}
        <div className="absolute bottom-0 right-0 w-[200px] h-[300px]">
          <div className="absolute bottom-[30%] left-[31%]">
            <Image src={`/${avatar}`} alt="" width={85} height={20}></Image>
          </div>
          <div className="absolute bottom-[16%] left-[52%]">
            <Image src={`/cart-w.svg`} alt="" width={100} height={20}></Image>
          </div>
          <div className="absolute z-10 w-[100px] bottom-[55%] left-[55%]">
            {watermelons.map((watermelon, i) => (
              <Image
                key={i}
                className={`absolute ${watermelon.position}`}
                src={'/wmelon.svg'}
                alt=""
                width={50}
                height={50}
              ></Image>
            ))}
          </div>
        </div>
        <div className="absolute right-0 bottom-0">
          <div className="flex items-center gap-2">
            <div className="text-2xl">{name}</div>
            <div className="text-2xl">({watermelons.length})</div>
          </div>
        </div>
      </div>
    </>
  )
}
