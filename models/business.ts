import mongoose from 'mongoose'

const BusinessSchema = new mongoose.Schema(
  {
    useEmail: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: String,
    address: String,
    phone: String,
    email: String,
    website: String,
    hours: String,
    logo: String,
    businessNumber: String,
    slug: {
      type: String,
      required: true,
      lowercase: true,
      index: true,
    },
    published: {
      type: Boolean,
      default: true,
    },
  },
  {
  timestamps: true
  }
)