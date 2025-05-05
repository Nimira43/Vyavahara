'use client'

import { BusinessState } from '@/utils/types/business'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { VscLocation } from 'react-icons/vsc'
import { TbPhone } from 'react-icons/tb'
import { AiOutlineMail } from 'react-icons/ai'
import { PiGlobeStandLight } from 'react-icons/pi'
import { BsClock } from 'react-icons/bs'
import Image from 'next/image'

export default function PreviewCard({ business }: { business: BusinessState }) {
  return (
    <Card
      className='w-full max-w-2xl mx-auto'
      style={{height: '354px'}}
    >
      <CardHeader className='flex flex-row items-center space-x-4 pb-2'>
        <div className='w-16 h-16 relative overflow-hidden rounded-md'>
          {business?.logo ? (
            <Image
              src={business.logo}
              alt={business.name}
              layout='fill'
              objectFit='cover'
            />
          ) : (
            <div
              className='w-full h-full bg-main-light flex items-center justify-center'
            >
              <span className='text-light text-xs'>No Logo</span>
            </div>
          )}
        </div>
        <div className='flex-1 min-w-0'>
          <CardTitle
            className='text-lg font-medium line-clamp-1'
          >
            {business.name}
          </CardTitle>
          <p
            className='text-sm text-muted-foreground line-clamp-1'
          >
            {business?.category || 'Category'}
          </p>
        </div>
      </CardHeader>
    </Card>
  )
}

function InfoItem({ icon: Icon, text }: { icon: any, text: string }) {
  
}