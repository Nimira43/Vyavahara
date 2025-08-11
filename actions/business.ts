'use server'

import db from '@/utils/db'
import Business from '@/models/business'
import { currentUser } from '@clerk/nextjs/server'
import { BusinessState } from '@/utils/types/business'
import { nanoid } from 'nanoid'
import slugify from 'slugify'

export const saveBusinessToDb = async (data: BusinessState) => {
  try {
    await db()
    const user = await currentUser()
    const userEmail = user?.emailAddresses[0].emailAddress
  } catch (err: any) {
    throw new Error(err)
  }
}