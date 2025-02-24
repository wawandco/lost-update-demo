import { getStock } from '@/app/lib/data'
import { Watermelon } from '@/app/lib/definitions'
import DetailIssue from '@/app/ui/detail-issue'

export default async function Page() {
  const stock = (await getStock()) as number
  const wts: Watermelon[] = []
  for (let index = 0; index < stock; index++) {
    wts.push({ position: `wt-${index + 1}` })
  }
  return (
    <>
      <DetailIssue key={'detail-issue'} watermelons={wts} />
    </>
  )
}
