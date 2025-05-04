'use client'
import { useBusiness } from '@/context/business'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { BusinessState } from '@/utils/types/business'
import PreviewCard from '@/components/business/preview/preview-card'

interface InputField {
  name: string
  label: string
  type: string
  required?: true
  accept?: string
}

const inputFields: InputField[] = [
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

export default function AddBusinessPage() {
  const { business, handleChange, handleSubmit } = useBusiness()

  return (
    <div className='flex flex-col lg:flex-row h-screen'>
      <div className='flex flex-col lg:w-1/2 p-4 lg:order-last lg:flex lg:justify-center lg:items-center overflow-y-auto '>
        <h1 className='text-2xl'>Vyavahara Business Directory</h1>
      </div>

      <div className='flex flex-col lg:w-1/2 p-4 lg:order-first lg:flex overflow-y-auto'>
        <h1 className='text-2xl'>Business Details Form</h1>
        <p>Enter your business details</p>
        {inputFields.map((item, index) => (
          <div
            key={index}
            className='my-2 w-full'
          >
            <label
              htmlFor={item.name}
              className='text-xs'
            >
              {item.label}
            </label>
            <Input
              name={item.name}
              type={item.type}
              required={item.required}
              onChange={handleChange}
              value={(business[item.name as keyof BusinessState] || '') as 
                | string
                | number
              }
            />
          </div>
        ))}
        <Button
          onClick={handleSubmit}
          type='submit'
          className='my-5'
        >
          Submit  
        </Button>
      </div>
    </div>
  )
}
