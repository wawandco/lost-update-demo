import { XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

import { Watermelon } from '@/app/lib/definitions'

export default function WatermelonTable({
  watermelons,
  available,
  showErrorMark,
}: {
  watermelons: Watermelon[]
  available: number
  showErrorMark: string
}) {
  return (
    <>
      <div
        className={`absolute min-h-[270px] min-w-[350px] right-[37%] bottom-[40%]`}
        id="container-seller"
      >
        <div className={`absolute w-[100%] h-[70%] left-[0%] top-[0%]`}>
          <Image src={'/poster.svg'} alt="" width={400} height={200}></Image>
        </div>
        <div
          className={`absolute hidden h-[70%] w-[33%] right-[20%] top-[-15%]`}
          id="seller"
        >
          <div className="absolute text-2xl">{available}</div>
          <Image src={'/seller.svg'} alt="" width={100} height={10}></Image>
        </div>
        <div
          className={`absolute h-[80%] w-[70%] left-[20%] -bottom-20`}
          id="table"
        >
          <Image
            className="absolute top-2 left-3"
            src={'/table.svg'}
            alt=""
            width={213}
            height={50}
          />
          {watermelons.map((watermelon, i) => {
            return (
              <div key={'w' + i} className={`absolute ${watermelon.position}`}>
                <Image
                  src={'/wmelon.svg'}
                  alt=""
                  height={40}
                  width={40}
                ></Image>
              </div>
            )
          })}
        </div>
        <div className={`${showErrorMark} absolute`}>
          <XMarkIcon width={300} height={300} stroke="red" />
        </div>
      </div>
    </>
  )
}
