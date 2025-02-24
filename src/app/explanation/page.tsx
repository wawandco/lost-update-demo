import { getStock } from '@/app/lib/data'
import { Watermelon } from '@/app/lib/definitions'
import OperationControl from '@/app/ui/operation-control'

export default async function Page() {
  const stock = (await getStock()) as number
  const wts: Watermelon[] = []
  for (let index = 0; index < stock; index++) {
    wts.push({ position: `wt-${index + 1}` })
  }
  return (
    <>
      <OperationControl option="explanation" watermelons={wts} />
    </>
  )
}
