'use client'
import { useBusiness } from '@/context/business'

interface InputField {
  name: string
  type: string
  label: string
  required: true
  accept?: string
}

const inputFields: InputField = [
  { name: 'name', type: 'text', label: 'Name', required: true},
  { name: 'category', type: 'text', label: 'Category', required: true},
  { name: 'description', type: 'text', label: 'Description', required: true},
  { name: 'address', type: 'text', label: 'Address', required: true},
  { name: 'phone', type: 'text', label: 'Phone', required: true},
  { name: 'email', type: 'text', label: 'Email', required: true},
  { name: 'website', type: 'text', label: 'Website', required: true},
  { name: 'hours', type: 'text', label: 'Hours', required: true},
  { name: 'logo', type: 'text', label: 'Logo', required: true}
]

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
