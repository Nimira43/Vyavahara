'use client'

import { BusinessState } from '@/utils/types/business'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { VscLocation } from "react-icons/vsc"
import { TbPhone } from "react-icons/tb"
import { AiOutlineMail } from "react-icons/ai"
import { PiGlobeStandLight } from "react-icons/pi"
import { BsClock } from "react-icons/bs"

export default function PreviewCard({ business }: { business: BusinessState }) {
  return (
    <Card
      className='w-full max-w-2xl mx-auto'
      style={{height: '354px'}}
    >
      
    </Card>
  )
}