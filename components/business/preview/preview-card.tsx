'use client'

import { BusinessState } from '@/utils/types/business'

export default function PreviewCard({ business }: { business: BusinessState}) {
  return (
    <div>
      <pre>
        {JSON.stringify(business, null, 4)}
      </pre>
    </div>
  )
}