'use client'
import { useBusiness } from '@/context/business'

export default function AddBusiness() {
  const { business } = useBusiness()
  
  return (
    <div className='flex flex-col lg:flex-row h-screen'>
      <div className='flex flex-col lg:w-1/2 p-4 lg:order-last lg:flex lg:justify-center lg:items-center'>Preview</div>


      <div className='flex flex-col lg:w-1/2 p-4 lg:order-first lg:flex lg:justify-center lg:items-center'>
        Form
        <pre>{JSON.stringify(business, null, 4)}</pre>
      </div>
    </div>
  )
}
