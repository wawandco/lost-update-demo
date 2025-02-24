import { JSX } from 'react'

import WatermelonTable from './watermelon-table'
import TextCard from './text-card'

export default function MedaowContainer({
  watermelons,
  carts,
  showErrorMark,
  card,
}: {
  watermelons: { position: string }[]
  carts: JSX.Element[]
  showErrorMark: string
  card: JSX.Element
}) {
  return (
    <>
      <div
        className={`h-[99%] w-[99%] bg-[url(/background.svg)] bg-cover bg-center`}
        id="main-background"
      >
        <div className="sticky flex items-end justify-center h-[100%] w-[100%]">
          <div className="flex h-[70%] w-[70%]">
            <TextCard 
              text={card}
            />
            <WatermelonTable
              watermelons={watermelons}
              available={5}
              showErrorMark={showErrorMark}
            />
            <div className={`flex items-end`}>
              {carts}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
