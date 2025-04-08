'use client'

import { createContext, useContext, useState, ReactNode } from 'react'



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
}

const BusinessContext = createContext<BusinessContextType | undefined>(undefined)

export const BusinessProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [business, setBusiness] = useState<BusinessState>(initialState)
  const [loading, setLoading] = useState<boolean>(false)
  return (
    <BusinessContext.Provider
      value={{ business, setBusiness, loading, setLoading}}
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