'use client'
import { useBusiness } from '@/context/business'

interface InputField {
  name: string
  type: string
  label: string
  placeholder: string
}

const inputFields: InputField = [
  { name: 'name', type: 'text', label: 'Name', placeholder: 'Business Name'},
  { name: 'category', type: 'text', label: 'Category', placeholder: 'Category'},
  { name: 'description', type: 'text', label: 'Description', placeholder: 'Description'},
  { name: 'address', type: 'text', label: 'Address', placeholder: 'Address'},
  { name: 'phone', type: 'text', label: 'Phone', placeholder: 'Phone'},
  { name: 'email', type: 'text', label: 'Email', placeholder: 'Email'},
  { name: 'website', type: 'text', label: 'Website', placeholder: 'Website'},
  { name: 'hours', type: 'text', label: 'Hours', placeholder: 'Hours'},
  { name: 'logo', type: 'text', label: 'Logo', placeholder: 'Logo'}
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
