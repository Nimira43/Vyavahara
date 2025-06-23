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
    }
  },
  {
  timestamps: true
  })