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