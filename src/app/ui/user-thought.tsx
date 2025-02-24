import { EyeIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

export default function UserThought({
  userThought,
}: {
  userThought: { icon: string; watermelons: number}
}) {
  let selectedIcon = <EyeIcon className="w-8 h-8 fill-white" />
  if (userThought.icon === "shopping") {
    selectedIcon = <ShoppingBagIcon className="w-7 h-7 fill-white" />
  }
  if (userThought.icon === "mark") {
    selectedIcon = <XMarkIcon className="w-9 h-9" fill="fill-red-600" stroke="red" />
  }
  return (
    <>
      <div className={`absolute bottom-[-50%] left-[25%] z-11`}>
        <div className="absolute top-[0%] left-[0%] z-10">
          {selectedIcon}
        </div>
        <div className="absolute left-[29%] top-[22%] z-10">
          <div className="flex justify-center items-center gap-1">
            <span className="font-bold text-2xl">{userThought.watermelons}</span>
            <Image src={'/wmelon.svg'} alt="" width={30} height={30}></Image>
          </div>
        </div>
        <Image
          src={`/bubble.svg`}
          alt=""
          width={85}
          height={20}
          className=""
        ></Image>
      </div>
    </>
  )
}
