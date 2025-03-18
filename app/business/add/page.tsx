'use client'
import { useBusiness } from '@/context/business'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface InputField {
  name: string
  label: string
  type: string
  required?: true
  accept?: string
}

const inputFields: InputField = [
  { name: 'name',  label: 'Business Name', type: 'text', required: true},
  { name: 'category', label: 'Business Category', type: 'text', required: true},
  { name: 'address', label: 'Business Address', type: 'text', required: true},
  { name: 'description', label: 'Business Description', type: 'text', required: true },
  { name: 'phone', label: 'Phone', type: 'tel'},
  { name: 'email', label: 'Email', type: 'email'},
  { name: 'website', label: 'Website', type: 'url'},
  { name: 'hours', label: 'Opening Hours', type: 'text' },
  { name: 'ern', label: 'Employer Reference Number', type: 'text' },
  { name: 'logo', label: 'Logo', type: 'file', accept: 'image/*'}
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
