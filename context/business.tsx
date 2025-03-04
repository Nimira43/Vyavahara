'use client'

import { createContext, createServerContext, useState, ReactNode } from 'react'

interface BusinessState {
  _id: string
  userEmail: string
  name: string
  category: string
  description: string
  address: string
  phone: string
  email: string
  website: string
  hours: string
  logo: string
  businessNumber: string
  status: string
  slug: string
  published?: boolean
  createdAt: string
  updatedAt: string
  __v: number
}

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
}

const BusinessContext = createContext<BusinessContextType | undefined>(undefined)