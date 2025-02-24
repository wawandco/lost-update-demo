import { Watermelon } from '@/app/lib/definitions'

import DetailExplanation from './detail-explanation'
import DetailFix from './detail-fix'
import DetailIssue from './detail-issue'

export default function OperationControl({
  option,
  watermelons,
}: {
  option: string
  watermelons: Watermelon[]
}) {
  if (option === 'issue') {
    return <DetailIssue key={'detail-issue'} watermelons={watermelons} />
  } else if (option === 'explanation') {
    return (
      <DetailExplanation key={'detail-explanation'} />
    )
  }
  return <DetailFix key={'detail-fix'} watermelons={watermelons} />
}
