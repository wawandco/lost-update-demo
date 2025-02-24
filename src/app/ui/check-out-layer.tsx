import { XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

export default function CheckOutLayer({
  watermelonsToBuy,
  position,
  mark,
}: {
  watermelonsToBuy: number
  position: string
  mark: string
}) {
  return (
    <>
      <div className={`absolute ${position} top-[29%] w-[450px] h-[400px] opacity-70`}>
        <div className="absolute bottom-30 -right-[3%] z-10">
          <div className="w-[230px] h-[105px] bg-amber-50 p-1 rounded-md">
            <h2 className="uppercase font-bold border-b-2">Summary</h2>
            <div className="flex justify-between border-b-2">
              <Image
                alt="watermelon"
                width={50}
                height={50}
                src="/wmelon.svg"
              />
              <div>
                  <div>Watermelons({watermelonsToBuy!})</div>
                <div>
                  <div>Stock: {5-watermelonsToBuy!}</div>
                </div>
              </div>
              <div>
                <div className="font-bold">${(99.99*watermelonsToBuy!).toFixed(2)}</div>
                <div>--</div>
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <div>Total</div>
                ${(99.99*watermelonsToBuy!).toFixed(2)}
              </div>
            </div>
            <div className={`${mark} opacity-50 z-11`}>
              <div className="absolute -bottom-8 left-[15%] z-10">
                <XMarkIcon className="w-40 h-40 stroke-[#f10505] fill-[#f10505]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
