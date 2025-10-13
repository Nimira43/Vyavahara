'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { useClerk, useUser } from '@clerk/nextjs'
import { saveBusinessToDb } from '@/actions/business'
import { BusinessState } from '@/utils/types/business'

const initialState: BusinessState = {
  _id: "",
  userEmail: "",
  name: "",
  category: "",
  description: "",
  address: "",
  phone: "",
  email: "",
  website: "",
  hours: "",
  logo: "",
  businessNumber: "",
  slug: "",
  createdAt: "",
  updatedAt: "",
  __v: 0
}

interface BusinessContextType {
  business: BusinessState
  setBusiness: React.Dispatch<React.SetStateAction<BusinessState>>
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (e: React.FormEvent) => void
}

const BusinessContext = createContext<BusinessContextType | undefined>(undefined)

export const BusinessProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [business, setBusiness] = useState<BusinessState>(initialState)
  const [loading, setLoading] = useState<boolean>(false)
  const { openSignIn } = useClerk()
  const { isSignedIn } = useUser()


  useEffect(() => {
    const savedBusiness = localStorage.getItem('business')
    if (savedBusiness) {
      setBusiness(JSON.parse(savedBusiness))
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target

    if (name === 'logo' && files?.[0]) {
      const previewUrl = URL.createObjectURL(files[0])
      setBusiness(prev => {
        const updated = { ...prev, logo: previewUrl }
        localStorage.setItem('business', JSON.stringify(updated))
        return updated
      })
      return
      }
      // Prevent fake path from being stored
      if (name === 'logo') return

    setBusiness(prev => {
      const updated = { ...prev, [name]: value }
      localStorage.setItem('business', JSON.stringify(updated))
      return updated
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isSignedIn) {
      openSignIn()
      return
    } else {

      try {
        setLoading(true)
        const saveBusiness = await saveBusinessToDb(business)
        setBusiness(saveBusiness)
        alert('Business created successfully')
      } catch (err: any) {
        console.log(err)        
      } finally {
        setLoading(false)
      }
    }
  }

  return (
    <BusinessContext.Provider
      value={{
        business,
        setBusiness,
        loading,
        setLoading,
        handleChange,
        handleSubmit,
      }}
    >
      {children}
    </BusinessContext.Provider>
  )
}

export const useBusiness = () => {
  const context = useContext(BusinessContext)
  if (context === undefined) {
    throw new Error('useBusiness must be used within a BusinessProvider')
  }
  return context
}

// Code that was causing issues

// const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   const { name, value } = e.target
//   setBusiness((prevBusiness: BusinessState) => {
//     const updatedBusiness = {
//       ...prevBusiness, [name]: value
//     }
//     localStorage.setItem('business', JSON.stringify(updatedBusiness))
//     return updatedBusiness
//   })
// }

// if (name === 'logo' && files?.[0]) {
//   const previewUrl = URL.createObjectURL(files[0])
//   setBusiness(prev => {
//     const updated = { ...prev, logo: previewUrl }
//     localStorage.setItem('business', JSON.stringify(updated))
//     return updated
//   })
//   return
// }